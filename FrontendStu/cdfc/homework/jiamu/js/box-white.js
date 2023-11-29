window.addEventListener("DOMContentLoaded", function () {

    // 渲染白茶区域
    var data4 =white;
    var target4 = document.querySelector(".container .box-white")
    renderWhite(target4, data4);

})
var white=[
    {
        picUrl:"./images/index/pic9.webp",
        name:"正安白茶",
        price:"￥500.00"
    }
]
function renderWhite(target4, data4) {


    var htmlStr = ""

    for (var i = 0; i < data4.length; i++) {
        htmlStr += `
        <ul>
            <li class="pic" style="background-image: url(${data4[i].picUrl});"><a href="javascript:;"></li>
            <li class="name"><a href="javascript:;">${data4[i].name}</a></li>
            <li class="price">${data4[i].price}</li>
        </ul>
      `
    }
    target4.innerHTML = htmlStr


}

