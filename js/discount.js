$(function() {
    var r = window.location.search;  //��ȡ����?���������
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


    $.ajax({
        type: 'get',
        url: 'http://127.0.0.1:3000/api/getdiscountproduct?productid=' + cas[0],
        datatype: 'json',
        success: function (data) {
            console.log(data);
            var html = template('template', data);
            $('.content').html(html);
        }
    })
})