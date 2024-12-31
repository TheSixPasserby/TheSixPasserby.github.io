export function toggleTheme(themeToggleButton) {
    const systemDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const savedTheme = localStorage.getItem("dark-theme");
    const isDarkMode = savedTheme === null ? systemDarkMode : savedTheme === "true";
    const icon = themeToggleButton.querySelector("i");

    // 初始化主题
    document.body.classList.toggle("dark-theme", isDarkMode);
    icon.classList.toggle("fa-sun", isDarkMode);
    icon.classList.toggle("fa-moon", !isDarkMode);

    // 切换深色模式
    themeToggleButton.addEventListener("click", () => {
        const newDarkMode = !document.body.classList.contains("dark-theme");
        document.body.classList.toggle("dark-theme", newDarkMode);
        icon.classList.toggle("fa-sun", newDarkMode);
        icon.classList.toggle("fa-moon", !newDarkMode);
        localStorage.setItem("dark-theme", newDarkMode.toString());
    });
}
