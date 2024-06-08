document.addEventListener("DOMContentLoaded", () => {
  const hero = document.querySelector(".hero.index");
  const images = [
    './images/item1.jpg',
    './images/item2.jpg',
    './images/item3.jpg',
    './images/item4.jpg',
    './images/item5.jpg',
    './images/item6.jpg',
    './images/item7.jpg',
    './images/item8.jpg',
    './images/item9.jpg',
    './images/home-hero.jpg'
  ];
  let currentIndex = 0;

  function fadeOut(element) {
    let opacity = 1;
    const timer = setInterval(() => {
      if (opacity <= 0.1) {
        clearInterval(timer);
        element.style.opacity = 0;
        currentIndex = (currentIndex + 1) % images.length;
        element.style.backgroundImage = `url(${images[currentIndex]})`;
        setTimeout(() => {
          element.style.opacity = 1; // フェードアウト後にすぐ次の画像を表示
          setTimeout(() => fadeOut(element), 2000); // 2秒後に再度フェードアウトを開始
        }, 0); // 画像を変更した後の短い待機時間
      } else {
        opacity -= 0.1;
        element.style.opacity = opacity;
      }
    }, 100); // フェードアウトの速度を調整
  }

  setTimeout(() => fadeOut(hero), 2000); // ページロード後2秒後にフェードアウトを開始

  const hamburger = document.querySelector(".hamburger");
  const navLinks = document.querySelector(".nav ul");

  hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("show");
  });
});
