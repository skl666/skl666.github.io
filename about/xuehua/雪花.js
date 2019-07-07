function flake() {
    var snow = document.createElement('img');
    snow.src = "flake.png";
    document.body.appendChild(snow);
    // 获取屏幕宽高
    var w = document.documentElement.clientWidth;
    var h = document.documentElement.clientHeight;
    var left = w * Math.random();
    var top = h * Math.random();

    snow.style.transform = "scale(" + (Math.random() * 0.4 + 0.2) + ")";
    snow.style.position = "absolute";
    snow.style.left = left + "px";
    snow.style.top = top + 'px';
    setInterval(function () {
        top = top + Math.random() * 8;
        left = left + Math.random() * 4;
        if (top > h || left > w) {
            left = w * Math.random();
            top = -100;
        }
        snow.style.left = left + "px";
        snow.style.top = top + "px";
    }, 1);
}
for (var i = 0; i < 50; i++) {
    flake();
}
