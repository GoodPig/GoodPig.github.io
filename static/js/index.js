window.onload = function() {

    window.onscroll = function() {
        var scrollLen = document.documentElement.scrollTop || this.document.body.scrollTop;
        console.log(scrollLen);
    }

    windowAddMouseWheel();

    var box = this.document.querySelector('body>.box');
    var personal = this.document.querySelector('.page-personal');


    /**
     * 监听滑轮执行 要使用防抖
     */
    var t;
    var flag = true;


    function windowAddMouseWheel() {
        var scrollFunc = function(e) {
            console.log(1)
            if (flag) {
                flag = false;
                a(e);
            }

        };
        //给页面绑定滑轮滚动事件
        if (document.addEventListener) { //火狐使用DOMMouseScroll绑定
            document.addEventListener('DOMMouseScroll', scrollFunc, false);
        }
        //其他浏览器直接绑定滚动事件
        window.onmousewheel = document.onmousewheel = scrollFunc;
    }

    function a(e) {
        e = e || window.event;
        if (e.wheelDelta) { //判断浏览器IE，谷歌滑轮事件
            if (e.wheelDelta > 0) { //当滑轮向上滚动时
                console.log("滑轮向下滚动");
                box.style.top = parseInt(getStyle(box).top) - personal.offsetHeight + 'px';
            }
            if (e.wheelDelta < 0) { //当滑轮向下滚动时
                console.log("滑轮向上滚动");
                box.style.top = parseInt(getStyle(box).top) + personal.offsetHeight + 'px';
            }
        } else if (e.detail) { //Firefox滑轮事件
            if (e.detail > 0) { //当滑轮向上滚动时
                console.log("滑轮向下滚动");
                box.style.top = parseInt(getStyle(box).top) - personal.offsetHeight + 'px';
            }
            if (e.detail < 0) { //当滑轮向下滚动时
                console.log("滑轮向上滚动");
                box.style.top = parseInt(getStyle(box).top) + personal.offsetHeight + 'px';
            }
        }
        clearTimeout(t);
        t = setTimeout(function() {
            flag = true;
        }, 2000)
    }
    /**
     * 返回元素属性
     * @param {*} ele 
     * @param {*} cla 
     */
    function getStyle(ele, cla) {
        return window.getComputedStyle ? window.getComputedStyle(ele, cla || null) : ele.currentStyle;
    }
}