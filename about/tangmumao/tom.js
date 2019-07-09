/*右耳朵scratch
左耳朵pie
额头 knockout
鼻子 angry
右嘴巴 drink
左嘴巴 eat
肩膀 cymbal
肚子 stomach
右脚 foot_right
左脚 foot left
尾巴 fart
*/
var tom = document.getElementById('tom');
var player = document.getElementById('player');

// 求屏幕的宽高
var w = document.documentElement.clientWidth;
// console.log(typeof(w));
var h = document.documentElement.clientHeight;
// console.log(typeof(m));
// console.log(m);
// console.log(n);
// $(window).resize(function () {

// });
// 当屏幕尺寸发生变化时从新获取宽高
window.onresize = function () {
    w = document.documentElement.clientWidth;
    h = document.documentElement.clientHeight;
}
// e 形参
function action(e) {
    console.log(event);
    console.log(e);
    // 转换坐标系（做一个简单的适配）
    var m = Number((w / 360).toFixed(2));
    var n = Number((h / 740).toFixed(2));
    // 右耳朵
    if (e.pageX > 70 * m && e.pageX < 120 * m && e.pageY > 125 * n && e.pageY < 210 * n) {
        play('scratch', 55, 18);
    }
    // console.log("x:" + e.pageX + "y:" + e.pageY);
    if (e.pageX > 230 * m && e.pageX < 280 * m && e.pageY > 125 * n && e.pageY < 210 * n) {
        // 左耳朵
        play("pie", 23, 13);
    }
    if (e.pageX > 150 * m && e.pageX < 210 * m && e.pageY > 130 * n && e.pageY < 170 * n) {
        // 额头
        play("knockout", 80, 15);
    }
    if (e.pageX > 150 * m && e.pageX < 210 * m && e.pageY > 240 * n && e.pageY < 280 * n) {
        // 鼻子
        play("angry", 25, 0);
    }
    if (e.pageX > 130 * m && e.pageX < 180 * m && e.pageY > 300 * n && e.pageY < 320 * n) {
        // 右嘴巴
        play("drink", 80, 35);
    }
    if (e.pageX > 180 * m && e.pageX < 230 * m && e.pageY > 300 * n && e.pageY < 320 * n) {
        // 左嘴巴
        play("eat", 39, 0);
    }
    if (e.pageX > 100 * m && e.pageX < 250 * m && e.pageY > 400 * n && e.pageY < 470 * n) {
        //    肩膀
        play("cymbal", 12, 0);
    }
    if (e.pageX > 120 * m && e.pageX < 230 * m && e.pageY > 500 * n && e.pageY < 640 * n) {
        //   肚子
        play("stomach", 33, 5);
    }
    if (e.pageX > 130 * m && e.pageX < 170 * m && e.pageY > 660 * n && e.pageY < 700 * n) {
        //    右脚
        play("foot_right", 29, 0);
    }
    if (e.pageX > 180 * m && e.pageX < 230 * m && e.pageY > 660 * n && e.pageY < 700 * n) {
        //    左脚
        play("foot_left", 29, 0);
    }
    if (e.pageX > 240 * m && e.pageX < 275 * m && e.pageY > 580 * n && e.pageY < 640 * n) {
        //   尾巴
        play("fart", 27, 0);
    }
}
var playing = false;
function play(name, count, start) {
    if (playing) return;
    playing = true;
    // 切换图片
    var i = 0;
    changeImg();
    function changeImg() {
        // 拼接路径
        var src = name + "/" + name + "_" + i + ".jpg";
        if (i < 10) {
            var src = name + "/" + name + "_0" + i + ".jpg";
        }
        // 特殊情况特殊处理
        if (name == "drink" && i == 15) {
            player.src = "sounds/pour.m4a";
            player.play();
        }
        if (name == "knockout" && i == 0) {
            player.src = "sounds/fall.m4a";
            player.play();
        }
        // 判断从第几张开始播放声音
        if (i == start) {
            // 播放声音
            player.src = "sounds/" + name + ".m4a";
            player.play();
        }
        // 切换图片
        tom.src = src;
        i++;
        if (i <= count) {
            setTimeout(changeImg, 100);
        } else {
            playing = false;
        }

    }
}