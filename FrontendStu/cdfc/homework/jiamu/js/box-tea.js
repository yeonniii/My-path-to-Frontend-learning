window.addEventListener("DOMContentLoaded", function () {

    // 渲染茶道区域
    var data1 = tea;
    var target1 = document.querySelector(".container .box-tea")
    renderTea(target1, data1);

})

var tea=[
    {
        picUrl:"./images/index/pic1.webp",
        name:"公道杯",
        price:"￥199.00"
    },
    {
        picUrl:"./images/index/pic2.webp",
        name:"紫砂壶",
        price:"￥500.00"
    },
    {
        picUrl:"./images/index/pic3.webp",
        name:"老铁壶",
        price:"￥19,999.00"
    },
    {
        picUrl:"./images/index/pic4.webp",
        name:"天目盏",
        price:"￥300.00"
    },
    {
        picUrl:"./images/index/pic5.webp",
        name:"柴烧花器",
        price:"￥500.00"
    },
    {
        picUrl:"./images/index/pic7.webp",
        name:"茶承",
        price:"￥300.00"
    },
    {
        picUrl:"./images/index/pic8.webp",
        name:"茶洗",
        price:"￥399.00"
    }
]
function renderTea(target1, data1) {


    var htmlStr = ""

    for (var i = 0; i < data1.length; i++) {
        htmlStr += `
        <ul>
            <li class="pic" style="background-image: url(${data1[i].picUrl});"><a href="javascript:;"></li>
            <li class="name"><a href="javascript:;">${data1[i].name}</a></li>
            <li class="price">${data1[i].price}</li>
        </ul>
      `
    }
    target1.innerHTML = htmlStr


}