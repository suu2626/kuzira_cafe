document.addEventListener("DOMContentLoaded", () => {
  // ローディングスクリーンを2秒後に消す
  setTimeout(() => {
    const loadingScreen = document.querySelector(".loading-screen");
    loadingScreen.style.display = "none";
  }, 1800);

  // トップ画像切り替え
  const hero = document.querySelector(".hero.index");
  const images = [
    "./images/item1.jpg",
    "./images/item2.jpg",
    "./images/item3.jpg",
    "./images/item4.jpg",
    "./images/item5.jpg",
    "./images/item6.jpg",
    "./images/item7.jpg",
    "./images/item8.jpg",
    "./images/item9.jpg",
    "./images/home-hero.jpg",
  ];
  let currentIndex = 0;

  function fadeOut(element) {
    let opacity = 1;
    const fadeOutTimer = setInterval(() => {
      if (opacity <= 0.1) {
        clearInterval(fadeOutTimer);
        element.style.opacity = 0;
        currentIndex = (currentIndex + 1) % images.length;
        element.style.backgroundImage = `url(${images[currentIndex]})`;
        element.style.opacity = 1; // フェードアウト後に次の画像を表示
        setTimeout(() => fadeOut(element), 2000); // 2秒後に再度フェードアウトを開始
      } else {
        opacity -= 0.1;
        element.style.opacity = opacity;
      }
    }, 120); // フェードアウトの速度を調整
  }

  setTimeout(() => fadeOut(hero), 3000); // ページロード後3秒後にフェードアウトを開始

  // ハンバーガーメニュー（スマホのみ）
  const hamburger = document.querySelector(".hamburger");
  const navLinks = document.querySelector(".nav ul");

  hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("show");
  });

  // スライドショーの設定
  let slideIndex = 0;
  showSlides();

  function showSlides() {
    const slides = document.querySelectorAll(".slide");
    slides.forEach((slide, index) => {
      slide.style.display = "none";
    });
    slideIndex++;
    if (slideIndex > slides.length) {
      slideIndex = 1;
    }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 3500); // 3秒ごとにスライドを切り替え
  }

  // トップへ戻るボタン
  const gotop = document.querySelector(".gotop");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 200) {
      gotop.classList.remove("hide");
    } else {
      gotop.classList.add("hide");
    }
  });

  // トップへ戻るボタンは初期状態では隠す
  gotop.classList.add("hide");
});
