function layout() {
    // 分布到1/4~3/4
    var w = $(window).width();
    var h = $(window).height();
    //遍历每一个图片div
    $("#xc div").each(function () {
        // 随机位置
        var top = (Math.random() * 0.5 + 0.25) * h - 50;
        var left = (Math.random() * 0.5 + 0.25) * w - 50;
        var rot = Math.random() * 90 - 45;
        $(this).css({
            top: top,
            left: left,
            transform: "rotate(" + rot + "deg)",

        });
    });
}
layout();
// 当屏幕宽高发生改变时
$(window).resize(layout);
// 相册第三方插件 fancybox
$("#xc div a").fancybox({
    // 打开和关闭的动画效果
    openEffect: "elastic",
    closeEffect: "elastic",
    // 是否显示关闭按钮（true显示 false不显示）
    closeBtn: false,
    // 自动轮播 （true自动轮播 false不会自动轮播 ）
    autoPlay: true,
    // 轮波时间
    playSpeed: 1000,
    // 辅助功能
    helpers: {
        // 按钮图
        buttons: {
            // top按钮停留在上面 bottom按钮停留在下面
            position: "top"
        },
        // 缩略图
        thumbs: {
            // 缩略图居中，不移动
            alwaysCenter:true,
            // 修改缩略图宽高
            width:50,
            height:50
        }

    }
});


