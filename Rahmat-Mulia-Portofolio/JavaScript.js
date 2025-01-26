// Menggunakan Intersection Observer untuk menambahkan kelas 'visible' pada skill-box saat elemen terlihat
const skillBoxes = document.querySelectorAll(".skill-box");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  { threshold: 0.5 }
); // Memicu ketika 50% dari elemen terlihat

skillBoxes.forEach((box) => observer.observe(box));
