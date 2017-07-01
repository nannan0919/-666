$(function(){

    //设置变量
    var winHeight=0;
    var domHeight=0;
    var totalLength=0;
    var len=10;
    var prolist = $('.prolist');
    var dataArr=[];

    //请求标题的数据


    //请求子页面的数据
    $.ajax({
        type:'get',
        url:'http://127.0.0.1:3000/api/getgsproduct?shopid=0&areaid=0',
        datatype:'json',
        success:function(data){
            console.log(data);
            dataArr=data;
            totalLength = data.result.length;
            var div = '';

            for(var i=0;i<len;i++){
                div +='<li>'+
                    '<a href="javascript:;">'+
                    '<img src=" data.result[i].productImg" alt=""/>'+
                    '<h4>'+data.result[i].productName+'</h4>'+
                    '<p style="color:#FF7C1C" >'+data.result[i].productPrice+'</p>'+

                    '</a>'+
                    '</li>';
            }

           $('.prolist ul').append(div);
        }
    })

    //获取元素
    //设置触发事件,当鼠标滚动就触发事件

    $(window).scroll(function(){
        winHeight=$(window).height();
        domHeight = $(document).height();
        console.log($(window).scrollTop()+'==='+(domHeight-winHeight));
        if($(window).scrollTop()==domHeight-winHeight){//这块为啥是$(window.scrollTop)
            if(len<totalLength){
                addProduct();//加载数据
            }else{
                alert('已经没有数据了')
            }
            console.log(totalLength);//20
            console.log(len);
            //addProduct();

        }

    });


    //获取数据
    function addProduct(){
        totalLength = dataArr.result.length;
        var div = '';
        for(var i=len;i<len+4;i++){
            div += '<div class="product"><ul><li>'+
                '<a href="discount.html?titleId='+dataArr.result[i].productId+'">'+
                '<img src=" data.result[i].productImg" alt=""/>'+
                '<h4>'+dataArr.result[i].productName+'</h4>'+
                '<p style="color:#FF7C1C" >'+dataArr.result[i].productPrice+'</p>'+
                '</a>'+
                '</li></ul></div>';
        }

        prolist.append(div);
        len+=4;
    }

    $.ajax({
        url: 'http://127.0.0.1:3000/api/getgsshop',
        datatype: 'json',
        success: function (data) {
            console.log(data);
            var list = '';
            $.each(data.result, function (index, element) {
                list += '<li>' +
                    '<i>' + element.shopName + '</i>' +
                    '</li>'
            })
            $('.sort ul').append(list);

        }
    })

    $.ajax({
        url: 'http://127.0.0.1:3000/api/getgsshoparea',
        datatype: 'json',
        success: function (data) {
            console.log(data);
            var list1 = '';
            $.each(data.result, function (index, element) {
                list1 += '<li>' +
                    '<i>' + element.areaName + '</i>' +
                    '</li>'
            })
            $('.sort1 ul').append(list1);

        }
    })

    //标题点击数据'


    $('.title span').on('click',function(){
        $('.sort').css("display","block");
            var flag = $(this).attr("flag");
            if (flag == "false") {
                $(this).attr("flag", "true");
            } else {
                $('.sort').css("display","none");

                $(this).attr("flag", "false");
            }



    })

})
