
$(function(){
    $.get('http://127.0.0.1:3000/api/getbaicaijiatitle',function(data){
        console.log(data);
        var list="";
        $.each(data.result,function(index,element){
            list+='<li>'+element.title+'</li>';
        })
        $('.title ul').html(list);
        var lis=document.getElementsByTagName('li');
        console.log(lis);
        $.each(lis,function(i,v){
            console.log(i);
            $(v).on('click',function(){
                $.get('http://127.0.0.1:3000/api/getbaicaijiaproduct?titleid='+i,function(data){
                    console.log(data);
                    var list1="";
                    $.each(data.result,function(index,element){
                        list1+='<li class="clearfix">'+element.productImg+element.productName+element.productPrice+element.productCouponRemain+element.productCoupon+element.productHref+'</li>';
                    })
                    $('.titleList ul').html(list1);
                });

            })
        })

    });

   var ul=$('.wrap_ul');
    var maxWidth=ul.width()-ul.parent().width();
    var distance= 0,StartX= 0,endX=0;
    ul.on('touchstart',function(e){
        StartX= e.originalEvent.touches[0].clientX;
    })
    ul.on('touchmove',function(e){
        moveX= e.originalEvent.touches[0].clientX;
        distance=moveX-StartX;
        moveEle(endX+distance,0);//距离 与 时间
    })
    ul.on('touchend',function(e){
        endX+=distance;
        if(endX<-maxWidth){
            moveEle(-maxWidth,0.5);
            endX=-maxWidth;
        }
        if(endX>0){
            moveEle(0,0.5);
            endX=0;
        }
    })
//滑动功能
    function moveEle(len,sec){
        ul.css('transform',"translateX(" + len + "px)");
        ul.css('transition',"all,"+sec+"s");

    }


})

