document.addEventListener("DOMContentLoaded", function () {
  const slides = document.querySelectorAll(".carousel-item");
  let currentSlide = 0;

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.style.display = i === index ? "block" : "none";
    });

    // slides.forEach((slide, i) => {
    //   if (i === index) {
    //     slide.style.opacity = "1";
    //     slide.style.visibility = "visible";
    //   } else {
    //     slide.style.opacity = "0";
    //     slide.style.visibility = "hidden";
    //   }
    // });
  }

  function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
  }

  function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
  }

  showSlide(currentSlide);

  // Tambahkan event listener untuk tombol next dan prev
  document.getElementById("next-btn").addEventListener("click", nextSlide);
  document.getElementById("prev-btn").addEventListener("click", prevSlide);
});
