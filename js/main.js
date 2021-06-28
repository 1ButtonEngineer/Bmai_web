

window.onload = function () {
    var list = document.getElementById('_list');
    var prev = document.getElementById('prev');
    var next = document.getElementById('next');
    var dots = document.getElementById('dots').getElementsByTagName('span');
    var imgs = document.getElementsByClassName('loop-image');
    var index = 1;

    function animate(offset) {
        var newLeft = parseInt(list.style.left) + offset;
        list.style.left = newLeft + 'px';

        if (newLeft < -7680) {
            list.style.left = -1280 + 'px';
        }
        if (newLeft > -1280) {
            list.style.left = -7680 + 'px'
        }
    }

    next.onclick = function () {
        animate(-1280);
    }

    var timer;
    function play() {
        timer = setInterval(function () {
            next.onclick()
        }, 3000)    
    }

    play();

    var loop_container = document.getElementById('loop_container');
    function stop() {
        clearInterval(timer);
    }
    loop_container.onmouseenter = stop;
    loop_container.onmouseleave = play;


    function dotsShow() {
        //首先清楚之前的样式
        for (let i = 0; i < dots.length; i++) {
            if (dots[i].className == 'on') {
                dots[i].className = '';

            }   
        }
        //数组从0开始，故index需要从-1开始
        dots[index - 1].className = 'on';

    }


    prev.onclick = function () {
        index -= 1;
        if(index < 1) {
            index = 5;
        }
        dotsShow(); 
        animate(1280);
    }

    next.onclick = function () {
        index += 1;
        if(index > 5) {
            index = 1;
        }
        dotsShow();
        animate(-1280);
    }
}

$(document).ready(function () {
    $("#section-10 .two_list").hover(function () {
        $("#section-10 .two_list .header_hid").css("display","block");
    },function () {
        $("#section-10 .two_list .header_hid").css("display","none");
    }
    )
})
