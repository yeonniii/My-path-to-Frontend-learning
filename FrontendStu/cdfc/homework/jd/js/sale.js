document.addEventListener('DOMContentLoaded', function () {
    // 获取当前时间
    const currentTime = new Date();

    // 设置目标时间为今天或明天的 14:00
    let targetTime = new Date();
    if (currentTime.getHours() >= 14) {
      // 如果当前时间已经过去了 14 点，就设置为明天的 14:00
      targetTime.setDate(currentTime.getDate() + 1);
    }
    targetTime.setHours(14, 0, 0, 0);

    // 获取倒计时元素
    const countdownElement = document.getElementById('countdown');

    function updateCountdown() {
      // 获取当前时间
      const currentTime = new Date();

      // 计算时间差
      const timeDifference = targetTime - currentTime;

      // 计算倒计时的小时、分钟和秒
      const hours = Math.floor(timeDifference / (1000 * 60 * 60));
      const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

      // 手动添加零，确保数字是两位数
      const formattedHours = hours < 10 ? '0' + hours : hours;
      const formattedMinutes = minutes < 10 ? '0' + minutes : minutes;
      const formattedSeconds = seconds < 10 ? '0' + seconds : seconds;

      // 更新倒计时元素的内容
      countdownElement.innerHTML = `<li>${formattedHours}</li><li>${formattedMinutes}</li><li>${formattedSeconds}</li>`;
    }

    // 每秒更新一次倒计时
    setInterval(updateCountdown, 1000);

    // 初始化页面加载时的倒计时
    updateCountdown();
  });