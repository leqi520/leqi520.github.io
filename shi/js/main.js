//禁止浏览器拖动图片打开新标签页的默认事件
document.ondragover = function (e) { e.preventDefault(); };
//禁止浏览器拖动图片
var im = document.getElementsByTagName('img');
for(var i = 0; i < im.length; i++) {
    im[i].onmousedown = function(e) {
        e.preventDefault()
        }
    }

    
/*弹性回弹*/