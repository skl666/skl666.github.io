//随机老鼠出洞和进洞
function show() {
    // console.log($("img").length);
    //随机一个零到十五的数字
    var random = Math.floor(Math.random() * 16);
    //获取到对应的随机老鼠
    // console.log($("img").get(random));
    var mouse = $("img").get(random);
    //给随机到的老鼠添加出洞的样式
    $(mouse).addClass("mouseup").removeClass("mousedown");
    //等待两秒如果没到打到老鼠进洞
    // 先运行 两秒后再运行
    setTimeout(
        function name(params) {
            $(mouse).removeClass("mouseup").addClass("mousedown");
            // $(mouse).addClass("mousedown");
        }, 2000);
}
show(); show(); show();
//先不运行 两秒后运行
setInterval(function () {
    show(); show(); show();
}, 2500);
//打老鼠
var score = 0;
$("img").click(function () {
    // 播放击中音效
    $("#dazhong").get(0).load();
    $("#dazhong").get(0).play();
    // 老鼠直接进洞
    $(this).removeClass("mouseup").addClass("mousedown");
    // 加分
    score = score + 10;
    $("#score").text("得分：" + score);
});
// 修改鼠标样式
$("body").mousedown(function () {
    $("body").css("cursor", "url(image/cursor-down.png),auto");
}).mouseup(function () {
    $("body").css("cursor", "url(image/cursor.png),auto");
});