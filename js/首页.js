$(function(){
    /*========== menu 开始=============*/
    $.ajax({
        type:'get',
        url:'http://127.0.0.1:3000/api/getindexmenu',
        dataType:'json',
        success:function(data){
            console.log(data)
            var tag ='<ul>';
            $.each(data.result,function(index,element){
                    tag+='<li class="li'+index+'"><a href="'+element.titlehref+'">'+element.img+'<p>'+element.name+'</p></a></li>'
            })
            tag+='</ul>';
            $('#menu').append(tag);

            $('li:nth-last-of-type(-n+4)').addClass('hiddle')
            $('.li7').on('click',function(){
            $('li:nth-last-of-type(-n+4)').toggleClass('hiddle');
           })
        }
    });

    /*========== menu 结束=============*/
    /*========== product 开始=============*/
    $.ajax({
        type:'get',
        url:'http://127.0.0.1:3000/api/getmoneyctrl',
        dataType:'json',
        success:function(data){
            console.log(data);
            var list ='';
            $.each(data.result,function(index,element){

                list +='<div>'+
                    '<a href="#">'+
                    '<div class="p_b_img fl">'+element.productImg2+'</div>'+
                    '<div><p>'+element.productName+'<span style="color: #FF6C00">'+element.productPinkage+'</span></p></div>'+
                    '<div><p class="p_b_b"><span>'+element.productFrom+'</span>|<span>'+element.productTime+'</span><span class="fr">'+element.productComCount.substring(1,2)+'</span></p></div>'+
                    '</a>'+
                    '</div>';
            })
            $('#p_bottom').html(list);
        }
       })

    /*========== product 结束=============*/
})
