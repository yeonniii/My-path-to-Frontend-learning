window.addEventListener("DOMContentLoaded", function () {

    // 渲香道区域
    var data3 =smell;
    var target3 = document.querySelector(".container .box-smell")
    renderSmell(target3, data3);

})
var smell=[
    {
        picUrl: "./images/index/pic6.webp",
        name: "香炉",
        price: "￥1599.00"
    }
]

function renderSmell(target3, data3) {


    var htmlStr = ""

    for (var i = 0; i < data3.length; i++) {
        htmlStr += `
        <ul>
            <li class="pic" style="background-image: url(${data3[i].picUrl});"><a href="javascript:;"></li>
            <li class="name"><a href="javascript:;">${data3[i].name}</a></li>
            <li class="price">${data3[i].price}</li>
        </ul>
      `
    }
    target3.innerHTML = htmlStr


}

