const sideBarToggle = document.querySelectorAll('.sidebar-toggle');
const sidebar = document.querySelector('.sidebar');
const themeToggleBtn = document.querySelector('.theme-toggle');
const themeIcon = themeToggleBtn.querySelector('.theme-icon');
const searchForm = document.querySelector('.search-form');

const updateThemeIcon = () => {
    const isDark = document.body.classList.contains("dark-theme");
    themeIcon.textContent = sidebar.classList.contains("collapsed") ? (isDark ? "dark_mode" : "light_mode") : (isDark ? "light_mode" : "dark_mode");
}

const savedTheme = localStorage.getItem("theme");
const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
const shouldUseDarkTheme = savedTheme === "dark" || (!savedTheme && systemPrefersDark);

document.body.classList.toggle("dark-theme", shouldUseDarkTheme);
updateThemeIcon();

sideBarToggle.forEach(btn => {
    btn.addEventListener('click', () => {
        sidebar.classList.toggle("collapsed");
        updateThemeIcon();
    });
});

searchForm.addEventListener('click',()=>{
    if (sidebar.classList.contains("collapsed")) {
        sidebar.classList.remove("collapsed");
        searchForm.querySelector("input").focus();
    }
});

themeToggleBtn.addEventListener('click',()=>{
    const isDark = document.body.classList.toggle("dark-theme");
    localStorage.setItem("theme", isDark ? "dark" : "light");
    updateThemeIcon();
});

if(window.innerWidth > 768) sidebar.classList.add("collapsed");