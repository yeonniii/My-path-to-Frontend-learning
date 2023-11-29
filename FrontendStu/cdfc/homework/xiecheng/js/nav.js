// 获取导航栏容器
const navBox = document.querySelector('.nav-box');

// 设置轮播步长
const step = 300; // 根据您的内容宽度调整此值

// 设置初始偏移值
let translateValue = 0;

// 移动轮播图的函数
function moveCarousel(direction) {
  translateValue += direction * step;
  // 限制偏移值不超过最大或最小值，避免过度滚动
  translateValue = Math.max(-step * (navBox.children.length - 1), Math.min(0, translateValue));
  navBox.style.transform = `translateX(${translateValue}px)`;
}

// 向右移动轮播图
document.querySelector('.nav-arrow-right').addEventListener('click', () => {
  moveCarousel(-1);
});

// 向左移动轮播图
document.querySelector('.nav-arrow-left').addEventListener('click', () => {
  moveCarousel(1);
});
