export function toggleSidebar(sidebarButton, body) {
    const sidebar = document.querySelector('.sidebar');

    // 切换侧边栏的展开与收起状态
    sidebarButton.addEventListener("click", () => {
        const isCollapsed = sidebar.classList.toggle('collapsed');
        body.classList.toggle("sidebar-open", !isCollapsed);
        sidebarButton.classList.toggle("rotated", !isCollapsed);
    });

    // 点击页面其他地方时收起侧边栏
    document.addEventListener("click", (event) => {
        if (!sidebar.contains(event.target) && !sidebarButton.contains(event.target)) {
            sidebar.classList.add('collapsed');
            body.classList.remove("sidebar-open");
            sidebarButton.classList.remove("rotated");
        }
    });

    sidebar.addEventListener("click", (event) => event.stopPropagation());
}
