// Alternar entre tema claro e escuro
const toggleThemeButton = document.getElementById("toggleTheme");

toggleThemeButton.addEventListener("click", () => {
  document.body.classList.toggle("dark-theme");

  // Alterar ícone do botão ao alternar o tema
  if (document.body.classList.contains("dark-theme")) {
    toggleThemeButton.src = "assets/theme_dark.png";
  } else {
    toggleThemeButton.src = "assets/theme_light.png";
  }
});

// Alternar entre as seções "Portfolio" e "Skills"
const portfolioSection = document.getElementById("portfolio");
const skillsSection = document.getElementById("skills");
const portfolioButton = document.getElementById("portfolio-btn");
const skillsButton = document.getElementById("skills-btn");

portfolioButton.addEventListener("click", () => {
  portfolioSection.style.display = "flex";
  skillsSection.style.display = "none";
  portfolioButton.classList.add("active-btn");
  skillsButton.classList.remove("active-btn");
});

skillsButton.addEventListener("click", () => {
  portfolioSection.style.display = "none";
  skillsSection.style.display = "flex";
  skillsButton.classList.add("active-btn");
  portfolioButton.classList.remove("active-btn");
});
