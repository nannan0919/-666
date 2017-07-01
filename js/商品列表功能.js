$(function(){
    var r = window.location.search;  //获取链接?后面的内容
    console.log(r);
    r=r.replace('?','');
    r = r.split("&&");
    var cas=[];
    for(var i=0;i< r.length;i++){
        a=r[i];
        a=a.substring(a.indexOf('='));
        a= a.replace('=','');
        a=decodeURI(a);
        a=[a];
        cas=cas.concat(a);
        console.log(cas);
    }

    var Tv=document.getElementById('Tv');
    $(Tv).html(cas[0]);
    /*========== goodsList 开始=============*/
    var page=1;
    function getData(){
        $.ajax({
            type:'get',
            url:'http://127.0.0.1:3000/api/getproductlist?categoryid='+cas[1]+'&pageid='+page,
            dataType:'json',
            success:function(data){
                console.log(data);
                var list3='';
                $.each(data.result,function(index,element){
                    list3+='<li><a href="%E8%AF%A6%E6%83%85%E9%A1%B5.html?titleName='+element.brandName+'&&titleId='+element.productId+'&&title='+cas[0]+'" title="'+element.brandName+'""><div class="g_left fl">'+element.productImg+'</div>'+'<div class="g_right fr"><p>'+element.productName+'</p><p class="price">'+element.productPrice+'</p><i>'+
                        element.productQuote+'</i></div></a></li>'
                })
                $('.goods ul').html(list3);
                $('#pg').html(page);
            }
        })

    }
    getData();
    $('#next').on('click',function(){
        console.log(pg);

        if(page<3){
            page++;
            getData();
        }else{
            alert('已经加载到最后一页了');
            return;
        }
    })
    $('#prev').on('click',function(){
        console.log(pg);
        if(page>1){
            page--;
            getData();
        }else{
            alert('已经加载到当前第一页了');
            return;
        }
    })
    /*========== goodsList 结束=============*/




})
