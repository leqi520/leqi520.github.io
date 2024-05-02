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

// 获取头像数据的API链接
const apiURL = "";//这个api已弃用https://api.bilibili.com/x/space/app/index?mid=1032285416新接口暂未对接

// 获取头像数据并处理显示
fetch(apiURL)
    .then(response => response.json()) // 解析API响应为JSON
    .then(data => {
        if (data.code === 200) {
            const avatarURL = data.data.avatar;
            displayAvatar(avatarURL);
        } else {
            console.error("无法获取头像数据。");
        }
    })
    .catch(error => {
        console.error("发生错误：", error);
    });

// 将头像显示在<div>元素中
function displayAvatar(avatarURL) {
    const avatarContainer = document.getElementById("avatar");
    const avatarImage = document.createElement("img"); // 创建一个<img>元素
    avatarImage.src = avatarURL; // 设置<img>元素的src属性为头像URL

    // 添加自适应样式
    avatarImage.style.maxWidth = "100%"; // 图片最大宽度为容器宽度
    avatarImage.style.height = "100%"; // 图片高度自适应

    avatarContainer.appendChild(avatarImage); // 将<img>元素添加到<div>中显示
}


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


/* 点击特效 */
(function () {
    var a_idx = 0;
    window.onclick = function (event) {
        var a = new Array("❤富强❤", "❤民主❤", "❤文明❤", "❤和谐❤", "❤自由❤", "❤平等❤", "❤公正❤", "❤法治❤", "❤爱国❤",
            "❤敬业❤", "❤诚信❤", "❤友善❤");

        var heart = document.createElement("b"); //创建b元素
        heart.onselectstart = new Function('event.returnValue=false'); //防止拖动

        document.body.appendChild(heart).innerHTML = a[a_idx]; //将b元素添加到页面上
        a_idx = (a_idx + 1) % a.length;
        heart.style.cssText = "position: fixed;left:-100%;"; //给p元素设置样式

        var f = 16, // 字体大小
            x = event.clientX - f / 2, // 横坐标
            y = event.clientY - f, // 纵坐标
            c = randomColor(), // 随机颜色
            a = 1, // 透明度
            s = 1.2; // 放大缩小

        var timer = setInterval(function () { //添加定时器
            if (a <= 0) {
                document.body.removeChild(heart);
                clearInterval(timer);
            } else {
                heart.style.cssText = "font-size:16px;cursor: default;position: fixed;color:" +
                    c + ";left:" + x + "px;top:" + y + "px;opacity:" + a + ";transform:scale(" +
                    s + ");";

                y--;
                a -= 0.016;
                s += 0.002;
            }
        }, 15)

    }
    // 随机颜色
    function randomColor() {

        return "rgb(" + (~~(Math.random() * 255)) + "," + (~~(Math.random() * 255)) + "," + (~~(Math
        .random() * 255)) + ")";
    }
}());
