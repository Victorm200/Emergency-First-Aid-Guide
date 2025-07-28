// Toggle tip visibility when title is clicked
const titles = document.querySelectorAll(".tip-title");

titles.forEach(title => {
  title.addEventListener("click", () => {
    const content = title.nextElementSibling;
    content.style.display = (content.style.display === "block") ? "none" : "block";
  });
});
// Dark mode toggle
const toggleBtn = document.getElementById("toggle-dark");

toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});
