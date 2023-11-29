document.addEventListener('DOMContentLoaded', function () {
    let currentIndex = 0;
    const totalSlides = document.querySelectorAll('.slide-img').length;
    const dotContainer = document.querySelector('.dot-container');

    // 创建小圆点
    for (let i = 0; i < totalSlides; i++) {
        const dot = document.createElement('div');
        dot.classList.add('dot');
        dotContainer.appendChild(dot);
    }

    const dots = document.querySelectorAll('.dot');

    function showSlide(index) {
        const slideBox = document.querySelector('.slide-box');
        const slideWidth = document.querySelector('.slide-img').clientWidth;

        if (index < 0) {
            index = totalSlides - 1;
        } else if (index >= totalSlides) {
            index = 0;
        }

        currentIndex = index;
        const translateValue = -index * slideWidth;
        slideBox.style.transform = `translateX(${translateValue}px)`;

        // 更新小圆点状态
        dots.forEach((dot, i) => {
            dot.classList.toggle('active', i === currentIndex);
        });
    }

    function nextSlide() {
        showSlide(currentIndex + 1);
    }

    function prevSlide() {
        showSlide(currentIndex - 1);
    }

    setInterval(nextSlide, 3000); // 每3秒切换一张图片（根据需要进行调整）

    // 点击小圆点切换图片
    dots.forEach((dot, i) => {
        dot.addEventListener('click', () => {
            showSlide(i);
        });
    });
});