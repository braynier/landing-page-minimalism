document.addEventListener("DOMContentLoaded", function () {
  const faqItems = document.querySelectorAll(".faq-section__accordion");

  faqItems.forEach((item) => {
    const tab = item.querySelector(".faq-section__tab");
    const answer = item.querySelector(".faq-section__answer");
    const icon = item.querySelector(".faq-section__icon");

    tab.addEventListener("click", () => {
      const isOpen = answer.classList.contains("open");

      // Close all accordion items first
      faqItems.forEach((otherItem) => {
        const otherAnswer = otherItem.querySelector(".faq-section__answer");
        const otherIcon = otherItem.querySelector(".faq-section__icon");
        if (otherAnswer !== answer && otherAnswer.classList.contains("open")) {
          otherAnswer.classList.remove("open");
          otherIcon.style.transform = "rotate(-90deg)";
          otherItem
            .querySelector(".faq-section__tab")
            .setAttribute("aria-expanded", "false");
        }
      });

      // Toggle the clicked item
      if (!isOpen) {
        answer.classList.add("open");
        icon.style.transform = "rotate(90deg)";
        tab.setAttribute("aria-expanded", "true");
      } else {
        answer.classList.remove("open");
        icon.style.transform = "rotate(-90deg)";
        tab.setAttribute("aria-expanded", "false");
      }
    });

    tab.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        tab.click();
      }
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const featuredProductsSwiper = new Swiper(".featured-products__swiper", {
    // Optional parameters
    loop: true,
    slidesPerView: 1,
    spaceBetween: 30,
    centeredSlides: true,

    // Navigation arrows
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    // Pagination
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },

    // Breakpoints for responsiveness
    breakpoints: {
      // when window width is >= 992px
      992: {
        slidesPerView: 1,
        spaceBetween: 40,
      },
    },
  });
});
