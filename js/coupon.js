

$(function(){

    var r = window.location.search;  //获取链接?后面的内容
    console.log(r);
    r = r.replace('?', '');
    r = r.split("&&");
    var cas = [];
    for (var i = 0; i < r.length; i++) {
        a = r[i];
        a = a.substring(a.indexOf('='));
        a = a.replace('=', '');
        a = decodeURI(a);
        a = [a];
        cas = cas.concat(a);
    }
    var dataArr=[];
//优惠券标题数据
    $.get('http://127.0.0.1:3000/api/getcoupon',function(data){
        console.log(data);
        var list="";
        $.each(data.result,function(index,element){
            list+= '<li><a href="'+element.couponLink+'?couponid='+element.couponId+'">'+'<img src="'+element.couponImg+'" alt=""/>'+'<p>'+element.couponTitle+'</p>'+'</a></li>'
        })
        $('.couponList ul').html(list);
    })

//优惠券列表数据
//    $.get('http://127.0.0.1:3000/api/getcouponproduct?couponid='+cas[0],function(data){
//        dataArr=data;
//        console.log(dataArr);
//    })
var i;
  $.ajax({
        type:'get',
        url:'http://127.0.0.1:3000/api/getcouponproduct?couponid='+cas[0],
        datatype:'json',
        success:function(data){
            dataArr=data;
            var list="";
            $.each(data.result,function(index,element){
                i=index;
                list+='<li class="clearfix" titleId="'+i+'">'+
                    element.couponProductImg+
                    '<p class="fl">'+
                    '<i>'+element.couponProductName+'</i>'+
                    '<b>'+element.couponProductPrice+'</b>'+
                    '</p>'+
                    '<a href="javascript:;" class="fr">></a>'+
                    '<s style="color:#EE7903">'+element.couponProductTime+'</s>'+
                    '</li>'

            })
            $('.couponList1 ul').html(list);
        }
    })

//模态框生成开始

       var show = document.getElementById("show");
        var ul = $('.couponList1').find('ul');
    var lis=document.getElementsByTagName('li');

        //lis.addEventListener('onclick',function(){

ul.on('click','li',function(){
    console.log($(this));
    var list2 = "";
        $.each(dataArr.result, function (index, element) {
            list2 += '<li class="clearfix">' +
                element.couponProductImg +
                '</li>'
        })
        $('.screen ul').html(list2);


    index=$(this).attr('titleId');
    imgWidth = $('.screen').width();

    $('.screen ul')[0].style.left= -(index * imgWidth)+"px";
    mask.style.display="block";
    show.style.display="block";
    //var event=event||window.event;
    //if(event.stopPropagation) {
    //    event.stopPropagation();
    //}
});

    mask.onclick=function(){
        mask.style.display = "none";
        show.style.display = "none";
    }

//模态框里的轮播图

    var box = document.getElementById("show");
    var screen = box.children[0];
    var ul = screen.children[0];
    var ulLis = ul.children;
    var arr = document.getElementById("arr");
    var left = document.getElementById("left");
    var right = document.getElementById("right");
    imgWidth = $('.screen').width();
    console.log(imgWidth);
    //5.点击箭头

    //var imgWidth;
    var index;
    right.onclick = function () {
        if (index === ulLis.length -1) {
            ul.style.left = 0+ "px"
            alert('已经到最后一页了');
            index=-1;
        }else{
            index++;
            ul.style.left= index * -imgWidth+"px";
//
        }

    }
    left.onclick = function () {
        //imgWidth = screen.offsetWidth;
        if (index === 0) {
            ul.style.left= 0+"px";
            alert('已经到当前第一页');
        }else{
            index--;
            ul.style.left= -index * imgWidth+"px";
        }

    }
})

// 模态框结束





