$(function(){

    //设置变量
    var winHeight=0;
    var domHeight=0;
    var totalLength=0;
    var len=6;
    var prolist = $('.prolist');//获取商品容量框是什么???
    var dataArr=[];
    $.ajax({
        type:'get',
        url:'http://127.0.0.1:3000/api/getinlanddiscount',
        datatype:'json',
        success:function(data){
            console.log(data);
            dataArr=data;
            totalLength = data.result.length;
            var div = '';

            for(var i=0;i<len;i++){
                div += '<div class="product"><ul><li>'+
                        '<a href="discount.html?titleId='+data.result[i].productId+'">'+
                    data.result[i].productImg+
                    '<h4>'+data.result[i].productName+'</h4>'+
                    '<p style="color:#FF7C1C" >'+data.result[i].productPrice+'</p>'+
                    '<i>'+data.result[i].productFrom+'</i>'+
                    '<i>'+data.result[i].productTime+'</i>'+
                    '</a>'+
                    '</li></ul></div>';
            }

            prolist.append(div);
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

    function addProduct(){
                totalLength = dataArr.result.length;
                var div = '';
                for(var i=len;i<len+2;i++){
                    div += '<div class="product"><ul><li>'+
                        '<a href="discount.html?titleId='+dataArr.result[i].productId+'">'+
                        dataArr.result[i].productImg+
                        '<h4>'+dataArr.result[i].productName+'</h4>'+
                        '<p style="color:#FF7C1C" >'+dataArr.result[i].productPrice+'</p>'+
                        '<i>'+dataArr.result[i].productFrom+'</i>'+
                        '<i>'+dataArr.result[i].productTime+'</i>'+
                        '</a>'+
                        '</li></ul></div>';
                }

                prolist.append(div);
                len+=2;
            }
})
