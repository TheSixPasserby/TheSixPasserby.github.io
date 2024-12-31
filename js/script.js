import { toggleTheme } from './theme.js';
import { toggleSidebar } from './sidebar.js';

document.addEventListener("DOMContentLoaded", () => {
    const themeToggleButton = document.getElementById("theme-toggle");
    const sidebarButton = document.querySelector(".toggle-sidebar");
    const body = document.body;

    toggleTheme(themeToggleButton);  // 初始化深色模式
    toggleSidebar(sidebarButton, body);  // 初始化侧边栏
});
