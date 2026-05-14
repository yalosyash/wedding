const weddingDate = new Date(2026, 5, 20, 15, 0, 0);
function updateTimer() {
  const now = new Date();
  const diff = weddingDate - now;

  if (diff <= 0) {
    document.getElementById("timer").innerHTML = "Сегодня!";
    return;
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);

  document.getElementById("timer").innerHTML =
    `Через ${days} дн. ${hours} ч. ${minutes} мин.`;
}
updateTimer();
setInterval(updateTimer, 60000); // обновляем каждую минуту
