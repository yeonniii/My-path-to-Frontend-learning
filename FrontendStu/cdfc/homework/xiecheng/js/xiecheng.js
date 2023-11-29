// 存储当前选中的索引
var currentTabIndex = 0;

function changeTab(index) {
  // 移除之前选中的样式
  var tabs = document.querySelectorAll('.tabber a');
  tabs[currentTabIndex].classList.remove('active');

  // 添加选中样式到当前点击的tab
  tabs[index].classList.add('active');

  // 更新当前选中的索引
  currentTabIndex = index;
}