window.addEventListener("DOMContentLoaded", function () {

    // 渲染商品区域
    var data = goods;
    var target = document.querySelector(".container .box-all")
    renderGoods(target, data);


    // tab事件
    // 获取元素
    var lists=document.querySelectorAll(".tab_list li")
    var items=document.querySelectorAll(".tab_con .item")

    for(var i=0 ;i<lists.length;i++){
        // 添加属性
        lists[i].setAttribute("index",i)
        lists[i].onclick=function(){
            // 用排他方法实现
            
            // 1.先去掉所有人的高亮
            for(var j=0;j<lists.length;j++){
                lists[j].className=""
            }

            // 2.添加高亮
            this.className="current"

            // 获取添加的自定义属性index的值
            var index=this.getAttribute("index")

            // 操作盒子
            for(var k=0;k<items.length;k++){
                // 1.先隐藏所有盒子
                items[k].style.display="none"
            }

                // 2.再让点击到的具体盒子高亮显示
                items[index].style.display="block"
            }

        }
})

function renderGoods(target, data) {


    var htmlStr = ""

    for (var i = 0; i < data.length; i++) {
        htmlStr += `
        <ul>
            <li class="pic" style="background-image: url(${data[i].picUrl});"><a href="javascript:;"></li>
            <li class="name"><a href="javascript:;">${data[i].name}</a></li>
            <li class="price">${data[i].price}</li>
        </ul>
      `
    }
    target.innerHTML = htmlStr


}


var goods = [
    {
        picUrl: "./images/index/pic1.webp",
        name: "公道杯",
        price: "￥199.00"
    },
    {
        picUrl: "./images/index/pic2.webp",
        name: "紫砂壶",
        price: "￥500.00"
    },
    {
        picUrl: "./images/index/pic3.webp",
        name: "老铁壶",
        price: "￥19,999.00"
    },
    {
        picUrl: "./images/index/pic4.webp",
        name: "天目盏",
        price: "￥300.00"
    },
    {
        picUrl: "./images/index/pic5.webp",
        name: "柴烧花器",
        price: "￥500.00"
    },
    {
        picUrl: "./images/index/pic6.webp",
        name: "香炉",
        price: "￥1599.00"
    },
    {
        picUrl: "./images/index/pic7.webp",
        name: "茶承",
        price: "￥300.00"
    },
    {
        picUrl: "./images/index/pic8.webp",
        name: "茶洗",
        price: "￥399.00"
    },
]

