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
        console.log(cas[0]);
    }


    $.ajax({
        type:'get',
        url:'http://127.0.0.1:3000/api/getmoneyctrlproduct?productid='+cas[0],
        datatype:'json',
        success:function(data){
            console.log(data);
            var html=template('template',data);
            $('.content').html(html);
        }
    })



    //$.ajax({
    //    type:'get',
    //    url:'http://127.0.0.1:3000/api/getmoneyctrlproduct?productid=50',
    //    datatype:'json',
    //    success:function(data){
    //        console.log(data);
    //        var html=template('temp',data);
    //        $('.cont').html(html);
    //    }
    //})






})
