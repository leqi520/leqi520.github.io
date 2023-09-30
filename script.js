const container = document.querySelector('.container')
const lis = document.querySelectorAll('.controls li')
var viewHeight = null //声明页面高度
var index = 0 //当前索引
var flag = true //节流开关

document.addEventListener('mousewheel', function (e) {
    e = e || window.event
    console.log(e);
    viewHeight = document.body.clientHeight;
    if (flag) {
        flag = false
        if (e.wheelDelta > 0) {
            index--
            if (index < 0) {
                index = 0
            }
        } else {
            index++
            if (index > lis.length - 1) {
                index = lis.length - 1
            }
        }
        container.style.top = -index * viewHeight + 'px'
        changeColor(index)
        setTimeout(function () {
            flag = true
        }, 500)
    }
})

// 绑定点击事件
for (let i = 0; i < lis.length; i++) {
    lis[i].onclick = function () {
        viewHeight = document.body.clientHeight
        index = i
        changeColor(index)
        container.style.top = -index * viewHeight + 'px'
    }
}

// 改变小li颜色
function changeColor(index) {
    for (var j = 0; j < lis.length; j++) {
        lis[j].className = ''
    }
    lis[index].className = 'active'
}



// 头像
$(document).ready(function () {
    $('.avatar').css('background-image', `url(avatar.jpg)`);
});

// 时间
function showCurrentTime() {
    var weekDayLabels = new Array("星期日","星期一","星期二","星期三","星期四","星期五","星期六");
    var now = new Date();
    var year=now.getFullYear();
    var month=now.getMonth()+1;
    var day=now.getDate()
    var currentime = '<span class="special">'+year+'年'+month+'月'+day+'日'+weekDayLabels[now.getDay()]+'</span><br>'
    return currentime;
}
