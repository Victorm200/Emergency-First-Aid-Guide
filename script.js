// -------------------
// Accordion Function
// -------------------
const titles = document.querySelectorAll(".tip-title");
titles.forEach(title => {
  title.addEventListener("click", () => {
    const content = title.nextElementSibling;
    content.classList.toggle("show");
  });
});

// -------------------
// Dark Mode Toggle
// -------------------
const toggleBtn = document.getElementById("toggle-dark");
if (toggleBtn) {
  toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    // Save preference
    localStorage.setItem("darkMode", document.body.classList.contains("dark"));
  });

  // Load preference on page load
  if (localStorage.getItem("darkMode") === "true") {
    document.body.classList.add("dark");
  }
}

// -------------------
// Search Functionality
// -------------------
const searchInput = document.getElementById("search-input");
if (searchInput) {
  searchInput.addEventListener("input", () => {
    const value = searchInput.value.toLowerCase();
    const tips = document.querySelectorAll(".tip");

    tips.forEach(tip => {
      const text = tip.textContent.toLowerCase();
      tip.style.display = text.includes(value) ? "block" : "none";
    });
  });
}

// -------------------
// Smooth Scroll for Navigation Links
// -------------------
document.querySelectorAll("nav a[href^='#']").forEach(link => {
  link.addEventListener("click", function(e) {
    e.preventDefault();
    const targetId = this.getAttribute("href").substring(1);
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 20,
        behavior: "smooth"
      });
    }
  });
});

// -------------------
// Mobile Menu Toggle (optional for later)
// -------------------
const menuToggle = document.getElementById("menu-toggle");
const navMenu = document.querySelector("nav ul");

if (menuToggle && navMenu) {
  menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("show-menu");
  });
}
