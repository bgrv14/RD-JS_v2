// Клас для роботи з API
class APIService {
  constructor() {
    this.baseUrl = "https://gorest.co.in/public/v2";
  }

  // Отримати список користувачів
  async getUsers() {
    try {
      const response = await fetch(`${this.baseUrl}/users`);
      if (!response.ok) throw new Error("Failed to fetch users");
      return response.json();
    } catch (error) {
      console.error(error);
      return null;
    }
  }

  // Отримати список постів користувача
  async getUserPosts(userId) {
    try {
      const response = await fetch(`${this.baseUrl}/users/${userId}/posts`);
      if (!response.ok) throw new Error("Failed to fetch posts");
      return response.json();
    } catch (error) {
      console.error(error);
      return null;
    }
  }

  // Отримати дані про пост і його коментарі
  async getPostDetails(postId) {
    try {
      const [postResponse, commentsResponse] = await Promise.all([
        fetch(`${this.baseUrl}/posts/${postId}`),
        fetch(`${this.baseUrl}/posts/${postId}/comments`),
      ]);
      const post = await postResponse.json();
      const comments = await commentsResponse.json();
      return { post, comments };
    } catch (error) {
      console.error(error);
      return null;
    }
  }
}

// Клас для роботи з UI
class UI {
  constructor(apiService) {
    this.apiService = apiService;
    this.appContainer = document.getElementById("app");
  }

  // Відобразити список користувачів
  async renderUsers() {
    const users = await this.apiService.getUsers();
    if (!users) {
      this.appContainer.innerHTML = `<p class="text-danger">Користувачі незнайдені</p>`;
      return;
    }
    const userList = users
      .map(
        (user) =>
          `<li><a href="#user-${user.id}" class="link-primary">${user.name}</a></li>`
      )
      .join("");
    this.appContainer.innerHTML = `<ul>${userList}</ul>`;
  }

  // Відобразити пости користувача
  async renderUserPosts(userId) {
    const posts = await this.apiService.getUserPosts(userId);
    if (!posts || posts.length === 0) {
      this.appContainer.innerHTML = `
            <p class="text-warning">У даного користувача відсутні пости</p>
            <a href="#" class="btn btn-secondary">Назад</a>
          `;
      return;
    }
    const postList = posts
      .map(
        (post) =>
          `<li>
                <a href="#post-${post.id}" class="link-primary">${
            post.title
          }</a>
                <p>${post.body.slice(0, 50)}...</p>
              </li>`
      )
      .join("");
    this.appContainer.innerHTML = `<ul>${postList}</ul><a href="#" class="btn btn-secondary">Назад</a>`;
  }

  // Відобразити окремий пост із коментарями
  async renderPostDetails(postId) {
    const data = await this.apiService.getPostDetails(postId);
    if (!data) {
      this.appContainer.innerHTML = `<p class="text-danger">Не вдалося завантажити дані поста</p>`;
      return;
    }
    const { post, comments } = data;
    const commentsContent =
      comments && comments.length > 0
        ? `<h4>Коментарі</h4><ul>${comments
            .map(
              (comment) =>
                `<li><strong>${comment.name}</strong>: ${comment.body}</li>`
            )
            .join("")}</ul>`
        : `<p class="text-muted">Коментарі відсутні</p>`;
    this.appContainer.innerHTML = `
          <h2>${post.title}</h2>
          <p>${post.body}</p>
          ${commentsContent}
          <a href="#user-${post.user_id}" class="btn btn-secondary">Назад</a>
        `;
  }
}

// Роутер
const apiService = new APIService();
const ui = new UI(apiService);

function router() {
  const hash = window.location.hash;
  if (!hash) {
    ui.renderUsers();
  } else if (hash.startsWith("#user-")) {
    const userId = hash.split("-")[1];
    ui.renderUserPosts(userId);
  } else if (hash.startsWith("#post-")) {
    const postId = hash.split("-")[1];
    ui.renderPostDetails(postId);
  }
}

// Слухач змін хешу
window.addEventListener("hashchange", router);
document.addEventListener("DOMContentLoaded", router);
