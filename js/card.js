document.addEventListener("DOMContentLoaded", function () {
    const cards = document.querySelectorAll('.card');
    cards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.2}s`;  // 设置每个卡片的动画延迟
        card.classList.add('flyIn');
    });
});