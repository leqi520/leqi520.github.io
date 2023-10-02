const profileImg = document.querySelector('.profile-img');
const galleryImages =document.querySelectorAll('.gallery-img');

profileImg.addEventListener('click', function() {
    const modal = document.createElement('div');
    modal.className = 'modal';
    document.body.append(modal);

    const modalContent = document.createElement('div');
    modalContent.className = 'modal-content';
    modal.appendChild(modalContent);

    const img = document.createElement('img');
    img.src = profileImg.src;
    img.alt = '赖瑜头像';
    img.style.width = '300px';
    img.style.height = '300px';
    
    modalContent.appendChild(img);
    
    const closeButton = document.createElement('button')
    closeButton.className = 'modal-clos-button';
    closeButton.innerHTML = 'x';
    modalContent.appendChild(closeButton);

    closeButton.addEventListener('click',function(){modal.style.display = 'none';});});

    galleryImages.forEach((image, index) => {
        image.addEventListener('click', function() {
            const modal = document.createElement('div');
            modal.className = 'modal';
            document.body.append(modal);

    const modalContent = document.createElement('div');
       modalContent.className = 'modal-content';
        modal.appendChild(modalContent);

        const img = document.createElement('img');
        img.src = image.src;
        img.alt = '照片预览';
        modalContent.appendChild(img);

        const closeButton = document.createElement('button');
        closeButton.className = 'modal-close-button';
        closeButton.innerHTML = '×';
        modalContent.appendChild(closeButton);

        closeButton.addEventListener('click', function() {
            modal.style.display = 'none';
        });
    });
});


/* 点击特效 */
(function () {
    var a_idx = 0;
    window.onclick = function (event) {
        var a = new Array("❤赖皮❤", "❤赖床❤", "❤姓赖的❤", "❤我草泥马❤", "❤妈的❤", "❤你妈死了❤", "❤我一眼就看出了答案❤", "❤你妈❤", "❤老赖❤",
            "❤莱斯❤", "❤赖榆❤", "❤太酷啦❤");

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