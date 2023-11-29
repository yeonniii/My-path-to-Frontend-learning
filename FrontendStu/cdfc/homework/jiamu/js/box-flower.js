window.addEventListener("DOMContentLoaded", function () {

    // 渲染花道区域
    var data2 =flower;
    var target2 = document.querySelector(".container .box-flower")
    renderFlower(target2, data2);

})
var flower=[
    {
        picUrl:"./images/index/pic5.webp",
        name:"柴烧花器",
        price:"￥500.00"
    }
]

function renderFlower(target2, data2) {


    var htmlStr = ""

    for (var i = 0; i < data2.length; i++) {
        htmlStr += `
        <ul>
            <li class="pic" style="background-image: url(${data2[i].picUrl});"><a href="javascript:;"></li>
            <li class="name"><a href="javascript:;">${data2[i].name}</a></li>
            <li class="price">${data2[i].price}</li>
        </ul>
      `
    }
    target2.innerHTML = htmlStr


}