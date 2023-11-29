//地图点击事件
{
    let getMap = document.querySelector("#map")
    let moreCitu = document.querySelector(".map .mapname")
    getMap.addEventListener("click", function () {
        moreCitu.style.display = ("block")
        getMap.style.backgroundColor = ("white")
        getMap.style.border = ("1px solid #ddd")
    })
    getMap.addEventListener("mouseout", function () {
        moreCitu.style.display = ("none")
        getMap.style.backgroundColor = ''
        getMap.style.border = ''
    })
    moreCitu.addEventListener("mouseover", function () {
        moreCitu.style.display = ("block")
        getMap.style.backgroundColor = ("white")
        getMap.style.border = ("1px solid #ddd")
    })
    moreCitu.addEventListener("mouseout", function () {
        moreCitu.style.display = ("none")
        getMap.style.backgroundColor = ''
        getMap.style.border = ''
    })
}