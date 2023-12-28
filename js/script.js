document.addEventListener("DOMContentLoaded", function () {
  // smooth scroll
  const links = document.querySelectorAll("nav a");

  links.forEach((link) => {
    link.addEventListener("click", smoothScroll);
  });

  function smoothScroll(e) {
    e.preventDefault();

    const targetId = this.getAttribute("href").substring(1);
    const targetElement = document.getElementById(targetId);

    window.scrollTo({
      top: targetElement.offsetTop,
      behavior: "smooth",
    });
  }

  // nav slide
  const button = document.querySelector("nav");
  const nav = document.querySelector("nav ul");

  button.addEventListener("click", function () {
    nav.classList.toggle("slide");
  });

  // carousel
  const slides = document.querySelectorAll(".carousel-item");
  let currentSlide = 0;

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.style.display = i === index ? "block" : "none";
    });
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

  // membuat navigasi aktif sesuai yang dilihat
  // Menangkap elemen-elemen bagian
  let sections = document.querySelectorAll("section");
  let navLinks = document.querySelectorAll("nav ul li a");

  window.onscroll = () => {
    let posisiScroll = window.scrollY;

    sections.forEach((bagian) => {
      let offset = bagian.offsetTop;
      let tinggi = bagian.offsetHeight;
      let id = bagian.getAttribute("id");

      if (posisiScroll >= offset && posisiScroll < offset + tinggi) {
        // Hapus kelas "active" dari semua tautan navigasi
        navLinks.forEach((tautan) => {
          tautan.classList.remove("active");
        });

        // Tambahkan kelas "active" ke tautan navigasi yang sesuai
        document
          .querySelector(`nav ul li a[href="#${id}"]`)
          .classList.add("active");
      }
    });
  };
});
