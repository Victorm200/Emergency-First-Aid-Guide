// Toggle tip visibility when title is clicked
const titles = document.querySelectorAll(".tip-title");

titles.forEach(title => {
  title.addEventListener("click", () => {
    const content = title.nextElementSibling;
    content.classList.toggle("show");
  });
});
// Dark mode toggle
const toggleBtn = document.getElementById("toggle-dark");

toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});
// Search functionality
const searchInput = document.getElementById("search-input");

searchInput.addEventListener("input", () => {
  const value = searchInput.value.toLowerCase();
  const tips = document.querySelectorAll(".tip");

  tips.forEach(tip => {
    const text = tip.textContent.toLowerCase();
    tip.style.display = text.includes(value) ? "block" : "none";
  });
});
