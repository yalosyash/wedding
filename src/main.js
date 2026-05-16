// Убираем прелоад после полной загрузки
window.addEventListener("load", function () {
  document.body.classList.remove("preload");
  initScrollAnimations();
});

// Анимация при скролле — звёзды
function initScrollAnimations() {
  const starsImage = document.querySelector(".stars-image");
  if (starsImage) {
    window.addEventListener("scroll", function () {
      const rect = starsImage.getBoundingClientRect();
      if (rect.top < window.innerHeight - 200 && rect.bottom > 0) {
        starsImage.classList.add("visible");
      }
    });
    window.dispatchEvent(new Event("scroll"));
  }
}
