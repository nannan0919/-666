$(function(){

    var r = window.location.search;  //获取链接?后面的内容
    console.log(r);
    r=r.replace('?','');
    r = r.split("&&");
    var cas=[];
    for(var i=0;i< r.length;i++) {
        a = r[i];
        a = a.substring(a.indexOf('='));
        a = a.replace('=', '');
        a = decodeURI(a);
        a = [a];
        cas = cas.concat(a);
        console.log(cas);
        console.log(cas[0]);
        console.log(cas[1]);
        console.log(cas[2]);
    }


    //$('#txt').html(cas[0]);
    $('#tit').html(cas[0]);

        //*商品详细信息开始*/
    $.ajax({
        type:'get',
        url:'http://127.0.0.1:3000/api/getproduct?productid='+cas[1],
        dataType:'json',
        success:function(data){
            console.log(data);
            var list='';
            var list1='';
            $.each(data.result,function(index,element){
                list+='<h4>'+element.productName+'</h4><span>'+element.productImg+'</span>';
                list1=element.bjShop;

                $('#txt').html('<i><a href="%E5%95%86%E5%93%81%E5%88%97%E8%A1%A8%E5%8A%9F%E8%83%BD%E9%A1%B5%E9%9D%A2.html?titleName=' + cas[2] + '&&titleId=' + element.categoryId
                    + '">'+cas[2]+'</a></i><i>'+">"+' </i>')

            })
            $('.part').html(list);
            $('.purchase').html(list1);
        }
    })
    /*商品信息结束*/

    /*商品评价开始*/
    $.ajax({
    type:'get',
        url:'http://127.0.0.1:3000/api/getproductcom?productid=10',
        dataType:'json',
        success:function(data ){
            console.log(data);
            var list2='';
            $.each(data.result,function(index,element){

                list2+='<div class="comment"><div class="top">'+
                    '<p class="left fl">'+element.comName+'</p>'+
                    '<p class="right fr">'+element.comTime+'</p>'+
                    '</div>'+
                    '<div class="buy fr"> '+element.comFrom+'</div>'+
                    '<p>'+element.comContent+'</p></div>'
            })
            $('.eval').append(list2);
        }
    })
    /*商品评价结束*/
})


