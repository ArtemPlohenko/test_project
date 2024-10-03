document.addEventListener("DOMContentLoaded", function () {
  /*============= Burger Menu =============*/
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".nav-links");
  const body = document.body;

  burger.addEventListener("click", () => {
    nav.classList.toggle("active");
    burger.classList.toggle("active");
    body.classList.toggle("no-scroll");
  });

  /*============= Universal Tab Functionality =============*/
  const allTabWrappers = document.querySelectorAll(".services--tab-wrapper");

  allTabWrappers.forEach((wrapper) => {
    const tabItems = wrapper.querySelectorAll(".services--item");
    const tabContents = wrapper.querySelectorAll(".services--tabcontent");

    tabItems.forEach((item, index) => {
      item.addEventListener("click", function () {
        tabItems.forEach((tab) => tab.classList.remove("active"));
        tabContents.forEach((content) => {
          content.classList.remove("active");
          content.style.opacity = "0";
          content.style.visibility = "hidden";
        });

        this.classList.add("active");

        const activeContent = tabContents[index];
        activeContent.classList.add("active");
        activeContent.style.visibility = "visible";
        activeContent.style.opacity = "1";

        setTimeout(() => {
          activeContent.style.opacity = "1";
        }, 10);
      });
    });

    // Initialize the first tab as active
    tabItems[0].classList.add("active");
    tabContents[0].classList.add("active");
    tabContents[0].style.visibility = "visible";
    tabContents[0].style.opacity = "1";
  });
});
