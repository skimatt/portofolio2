// Script untuk efek scroll
document.addEventListener("scroll", function () {
  const body = document.querySelector("body");
  if (window.scrollY > 100) {
    body.classList.add("scrolled");
  } else {
    body.classList.remove("scrolled");
  }
});

// Script untuk form submission
const form = document.querySelector("form");

if (form) {
  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const formData = new FormData(form);
    try {
      const response = await fetch(form.action, {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        alert("Thank you! Your message has been sent.");
        form.reset(); // Reset form setelah berhasil dikirim
      } else {
        alert("Oops! Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Oops! Something went wrong. Please try again.");
    }
  });
}
// Scroll Event Listener
window.addEventListener("scroll", function () {
  const scrollIndicator = document.querySelector(".scroll-indicator");
  const scrollThreshold = 100; // Adjust as needed

  if (window.scrollY > scrollThreshold) {
    document.body.classList.add("scrolled");
  } else {
    document.body.classList.remove("scrolled");
  }
});
