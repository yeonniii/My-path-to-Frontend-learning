
  let currentPage = 1;

  function changePage(page) {
    if (page === currentPage) return;

    // 隐藏当前页
    document.querySelector('.sec-pg' + currentPage).style.display = 'none';
    document.querySelector('.indicator.active').classList.remove('active');

    // 显示新页
    document.querySelector('.sec-pg' + page).style.display = 'block';
    document.querySelector('.indicator:nth-child(' + page + ')').classList.add('active');

    // 更新当前页
    currentPage = page;
  }

  document.addEventListener('DOMContentLoaded', function () {
    const section = document.querySelector('.section');
    let startX;

    section.addEventListener('touchstart', function (e) {
      startX = e.touches[0].clientX;
    });

    section.addEventListener('touchend', function (e) {
      const endX = e.changedTouches[0].clientX;
      const deltaX = endX - startX;

      // 根据需要调整灵敏度
      if (deltaX > 50) {
        changePage(2);
      } else if (deltaX < -50) {
        changePage(1);
      }
    });
  });
