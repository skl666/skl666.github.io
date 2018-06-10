/**
 * Created by Administrator on 2018/6/9.
 */
$(function(){
    $("#id1").click(function(){
      $(".goods").css("display","block");
      $(".goodspl").css("display","none");
    })
    $("#id2").click(function(){
        $(".goods").css("display","none");
        $(".goodspl").css("display","block");
    })
    
    $("#pltj").bind("click",function(){
    	over();
        var texte=$("#tjtext").val();
        var str="";
        for(var i=0;i<5;i++){
            if(i<=strs) {
                str = str + "<img src=' imgr.png'>";
            }
            else{
                str=str+"<img src=' img1.png'>";
            }
        }

        var stre=$("<li class='ting'><div>"+str+"</div><div>"+texte+"</div><div>***(匿名)</div><br><a class='sca'>删除评价</a></li>");
        $(".past ul").append(stre);
        $(".sca").on("click",function(){
            $(this).parents(".ting").remove();
    })
    })
})
var strs=0;
$(".nowstar div img").each(function(index){
    var starhx="img1.png";
    var starrx="imgr.png";
    $(this).on("click mouseover",function(){
        $(".nowstar div img").attr("src",starhx);
        $(this).attr("src",starrx);
        $(this).prevAll().attr("src",starrx);
        strs=index;
    })
})

function over(){
	 var sou=document.getElementById("tjtext");
	 sou.value="请输入评论";
}
function focussou(){
            var sou=document.getElementById("tjtext");
            if(sou.value=="请输入评论"){
                sou.value="";
            }
       }