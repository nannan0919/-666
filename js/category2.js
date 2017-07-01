/*=======goodsgray 开始=============*/
$(function(){
    $.ajax({
    type:'get',
    url:'http://127.0.0.1:3000/api/getcategorytitle',
    dataType:'json',
    success:function(data) {
        //console.log(data);
        var list = '';
        var res=[];
        $.each(data.result, function (index, element) {

            list += '<li  flag = "true"><div class="goods"><a><b>' + element.title + '</b>' + '<s class="fr">' + '>' + '</s>' + '</a></div></li>'
            res.push(data.result[index].titleId);


        })
        $('.category ul').html(list);



        var lis=document.getElementsByTagName('li');

        $.each(lis,function(index,value){
            var id=index;
            $(value).on('click',function(){
                console.log($(this));
                aa($(this));
                function aa(a) {
                    $.ajax({
                        type: 'get',
                        url: 'http://127.0.0.1:3000/api/getcategory?titleid=' + id,
                        dataType: 'json', success: function (data) {
                            console.log(data);
                            var list2 = '';
                            $.each(data.result, function (index, element) {
                                var id = index;
                                list2 += '<li><a href="%E5%95%86%E5%93%81%E5%88%97%E8%A1%A8%E5%8A%9F%E8%83%BD%E9%A1%B5%E9%9D%A2.html?titleName=' + element.category + '&&titleId=' + element.categoryId
                                    + '" title="' + element.category + '">' + element.category + '</a></li>'
                            });

                            var List = '<div class="goodsCategory"><ul>' + list2 + '</ul></div>';

                            var flag = a.attr("flag");
                            console.log(flag);
                            //console.log($(this));
                            if (flag == "true") {
                                $(List).appendTo(value);
                                a.attr("flag", "false");
                            } else {
                                a.find($('.goodsCategory')).hide();
                                a.attr("flag", "true");
                            }

                        }
                    })
                }
            })

        })
    }
})



})
                //===goodscategray 结束=======










//遍历
