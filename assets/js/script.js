document.addEventListener("DOMContentLoaded", function () {
  /*============= Burger Menu =============*/
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".nav-links");
  const body = document.body;

  if (burger && nav) {
    burger.addEventListener("click", () => {
      nav.classList.toggle("active");
      burger.classList.toggle("active");
      body.classList.toggle("no-scroll");
    });
  }

  /*============= Universal Tab Functionality =============*/
  const allTabWrappers = document.querySelectorAll(".services--tab-wrapper");

  allTabWrappers.forEach((wrapper) => {
    const tabItems = wrapper.querySelectorAll(".services--item");
    const tabContents = wrapper.querySelectorAll(".services--tabcontent");

    tabItems.forEach((item) => {
      item.addEventListener("click", function () {
        tabItems.forEach((tab) => tab.classList.remove("active"));
        tabContents.forEach((content) => content.classList.remove("active"));

        this.classList.add("active");
        const activeContent = wrapper.querySelector(`#${item.dataset.tab}`);
        activeContent.classList.add("active");
      });
    });

    tabItems[0].classList.add("active");
    tabContents[0].classList.add("active");
  });

  /*============= Slider =============*/
  const totalSlides = 8;

  const slidesContainer = document.querySelector(".slider--img");
  slidesContainer.innerHTML = "";

  for (let i = 1; i <= totalSlides; i++) {
    const slideItem = document.createElement("div");
    slideItem.classList.add("slider--item");
    if (i === 1) slideItem.classList.add("active");

    slideItem.innerHTML = `
      <img src="assets/img/work-video-conference.png" alt="work-video-conference">
    `;

    slidesContainer.appendChild(slideItem);
  }

  const slides = document.querySelectorAll(".slider--item");
  const prevBtn = document.querySelector(".prev-slide");
  const nextBtn = document.querySelector(".next-slide");
  const currentSlideElement = document.querySelector(".current-slide");
  const totalSlidesElement = document.querySelector(".total-slides");
  const dotsContainer = document.querySelector(".dots-container");

  let currentSlide = 0;

  totalSlidesElement.textContent = totalSlides;

  function updateDots() {
    dotsContainer.innerHTML = "";
    for (let index = 0; index < totalSlides; index++) {
      const dot = document.createElement("span");
      dot.classList.add("dot");
      if (index === currentSlide) {
        dot.classList.add("active");
      }
      dot.addEventListener("click", () => {
        currentSlide = index;
        updateSlider();
      });
      dotsContainer.appendChild(dot);
    }
  }

  function updateSlider() {
    const offset = -currentSlide * 100;
    slidesContainer.style.transform = `translateX(${offset}%)`;

    slides.forEach((slide, index) => {
      slide.classList.toggle("active", index === currentSlide);
    });

    currentSlideElement.textContent = currentSlide + 1;
    updateDots();

    const texts = document.querySelectorAll(".services--text");
    texts.forEach((text, index) => {
      text.classList.toggle("active", index === currentSlide);
    });
  }

  prevBtn.addEventListener("click", () => {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    updateSlider();
  });

  nextBtn.addEventListener("click", () => {
    currentSlide = (currentSlide + 1) % totalSlides;
    updateSlider();
  });

  updateSlider();
});
