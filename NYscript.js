const targetDate = new Date("2025-01-01T00:00:00"); // Задана дата (Новий Рік)

// Оновлення таймера кожну секунду
const timerInterval = setInterval(calculateTimeLeft, 1000);

function calculateTimeLeft() {
  const now = new Date(); // Поточна дата
  const timeLeft = targetDate - now; // Різниця в мілісекундах

  if (timeLeft <= 0) {
    // Якщо час минув, зупиняємо таймер і показуємо повідомлення
    document.getElementById("timer").textContent = "Happy New Year! 🎉";
    clearInterval(timerInterval);
    return; // Виходимо з функції
  }

  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  // Оновлення тексту таймера
  document.getElementById(
    "timer"
  ).textContent = `${days} днів ${hours} годин ${minutes} хвилин ${seconds} секунд`;
}
