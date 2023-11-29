window.addEventListener("DOMContentLoaded", function () {
    swiperRun();

    // 渲染美食区域
    var data1 = food;
    var target1 = document.querySelector(".food-entertainment .food .list")
    renderFood(target1, data1);

    // 渲染娱乐区域
    var data2 = entertainment;
    var target2 = document.querySelector(".food-entertainment .entertainment .list")
    renderEnt(target2, data2)

    // 渲染丽人区域
    var data4 = beauty;
    var target4 = document.querySelector(".beauty-baby .beauty .list")
    renderBeauty(target4, data4)


    // 渲染亲子区域
    var data5 = baby;
    var target5 = document.querySelector(".beauty-baby .baby .list")
    renderBaby(target5, data5)

    // 渲染学习培训区域
    var data7 = study;
    var target7 = document.querySelector(".study .list")
    renderStudy(target7, data7)

    // 渲染旅游酒店区域
    var data9 = hotel;
    var target9 = document.querySelector(".hotel .list")
    renderHotel(target9, data9)


})

function swiperRun() {
    var swiper = new Swiper(".mySwiper", {
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });
}

function renderFood(target1, data1) {


    var htmlStr = ""

    for (var i = 0; i < data1.length; i++) {
        htmlStr += `
      <li>
      <div class="img" style="background-image: url(${data1[i].imgUrl});"></div>
      <p class="title">${data1[i].title}</p>
      <div class="food-detail">
           <p class="type">${data1[i].type}</p>
           <p class="street">${data1[i].street}</p>
        </div>
      <p class="price">${data1[i].price}</p>
    </li>
      `
    }
    target1.innerHTML = htmlStr
}

function renderEnt(target2, data2) {


    var htmlStr = ""

    for (var i = 0; i < data2.length; i++) {
        htmlStr += `
      <li>
      <div class="img" style="background-image: url(${data2[i].imgUrl});"></div>
      <p class="title">${data2[i].title}</p>
      <div class="entertainment-detail">
           <p class="type">${data2[i].type}</p>
           <p class="street">${data2[i].street}</p>
        </div>
      <p class="price">${data2[i].price}</p>
    </li>
      `
    }
    target2.innerHTML = htmlStr
}


function renderBeauty(target4, data4) {


    var htmlStr = ""


    for (var i = 0; i < data4.length; i++) {
        htmlStr += `
      <li>
        <div class="img" style="background-image: url(${data4[i].imgUrl});"></div>
        <p class="title">${data4[i].title}</p>
        <div class="beauty-detail">
           <p class="type">${data4[i].type}</p>
           <p class="street">${data4[i].street}</p>
        </div>
        <p class="price">${data4[i].price}</p>
    </li>
      `
    }
    target4.innerHTML = htmlStr
}

function renderBaby(target5, data5) {


    var htmlStr = ""

    for (var i = 0; i < data5.length; i++) {
        htmlStr += `
      <li>
      <div class="img" style="background-image: url(${data5[i].imgUrl});"></div>
      <p class="title">${data5[i].title}</p>
      <div class="baby-detail">
           <p class="type">${data5[i].type}</p>
           <p class="street">${data5[i].street}</p>
        </div>
      <p class="price">${data5[i].price}</p>
    </li>
      `
    }
    target5.innerHTML = htmlStr
}


function renderStudy(target7, data7) {


    var htmlStr = ""

    for (var i = 0; i < data7.length; i++) {
        htmlStr += `
      <li>
      <div class="img" style="background-image: url(${data7[i].imgUrl});"></div>
      <p class="title">${data7[i].title}</p>
      <div class="study-detail">
           <p class="type">${data7[i].type}</p>
           <p class="street">${data7[i].street}</p>
        </div>
      <p class="price">${data7[i].price}</p>
    </li>
      `
    }
    target7.innerHTML = htmlStr
}

function renderHotel(target9, data9) {


    var htmlStr = ""

    for (var i = 0; i < data9.length; i++) {
        htmlStr += `
      <li>
      <div class="img" style="background-image: url(${data9[i].imgUrl});"></div>
      <p class="title">${data9[i].title}</p>
      <div class="hotel-detail">
           <p class="type">${data9[i].type}</p>
           <p class="street">${data9[i].street}</p>
        </div>
      <p class="price">${data9[i].price}</p>
    </li>
      `
    }
    target9.innerHTML = htmlStr
}


// 注册鼠标悬停图片变透明事件
$(function () {
    var $img = $('.img')

    $img.mouseover(function () {
        $(this).css("opacity", 0.8)
    })

    $img.mouseleave(function () {
        $(this).css("opacity", 1)
    })
})

// 注册滚动条事件
$(function () {

    $(document).scroll(function () {
        if ($(document).scrollTop() >= $('.main').offset().top) {
            $('.nav').fadeIn(100)
        } else {
            $('.nav').fadeOut(100)
        }
    })

    $('.nav1').click(function () {
        var foodOffsetTop = $('.food').offset().top;
        $('html, body').animate({ scrollTop: $('.food').offset().top }, 500);
    });
    $('.nav2').click(function () {
        var foodOffsetTop = $('.marry').offset().top;
        $('html, body').animate({ scrollTop: $('.marry').offset().top }, 500);
    });
    $('.nav3').click(function () {
        var foodOffsetTop = $('.beauty').offset().top;
        $('html, body').animate({ scrollTop: $('.beauty').offset().top }, 500);
    });
    $('.nav4').click(function () {
        var foodOffsetTop = $('.house').offset().top;
        $('html, body').animate({ scrollTop: $('.house').offset().top }, 500);
    });
    $('.nav5').click(function () {
        var foodOffsetTop = $('.study').offset().top;
        $('html, body').animate({ scrollTop: $('.study').offset().top }, 500);
    });
    $('.nav6').click(function () {
        var foodOffsetTop = $('.life').offset().top;
        $('html, body').animate({ scrollTop: $('.life').offset().top }, 500);
    });
    $('.nav7').click(function () {
        var foodOffsetTop = $('.hotel').offset().top;
        $('html, body').animate({ scrollTop: $('.hotel').offset().top }, 500);
    });
    $('.last').click(function () {
        $('html').animate(
            { scrollTop: 0 }, 500
        )
    })
})

$(function(){
    $('.food .img').click(function(){
    // 在这里插入跳转路径
    window.location.href="https://blog.csdn.net/qq_43008667/article/details/122910798";
})
})

