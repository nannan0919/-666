$(function(){
var id= 0,page=1;
function getData(){
    $.ajax({
        type:'get',
        url:'http://127.0.0.1:3000/api/getmoneyctrl?pageid='+id,
        datatype:'json',
        success:function(data){
            console.log(data);
            var html = template('a',data);
            $('.body').html(html);
            $('#pg').html(page);
        }
    })
}
    getData();
    $('#next').on('click',function(){
        if(page<14){
            id++;
            page++;
            getData();
        }else{
            alert("已到最后一页");
            return;
        }
    })

    $('#prev').on('click',function(){
        console.log(pg);
        if(page>1){
            page--;
            id--;
            getData();
        }else{
            alert('已经加载到当前第一页了');
            return;
        }
    })

})
