$(function(){
    var checkboxs = $(".checkbox");

    checkboxs.click(function(){
        var mark = $(this).find(".check-mark");
        if(mark.is(":hidden")) mark.show();
        else mark.hide();
    });

    $("#phone").mask("+7 999 999 9999");
})

function Calendar2(id, year, month) {
    var Dlast = new Date(year,month+1,0).getDate(),
        D = new Date(year,month,Dlast),
        DNlast = new Date(D.getFullYear(),D.getMonth(),Dlast).getDay(),
        DNfirst = new Date(D.getFullYear(),D.getMonth(),1).getDay(),
        calendar = '<tr>',
        month=["Январь","Февраль","Март","Апрель","Май","Июнь","Июль","Август","Сентябрь","Октябрь","Ноябрь","Декабрь"];
    if (DNfirst != 0) {
      for(var  i = 1; i < DNfirst; i++) calendar += '<td>';
    }else{
      for(var  i = 0; i < 6; i++) calendar += '<td>';
    }
    for(var  i = 1; i <= Dlast; i++) {
      if (i == new Date().getDate() && D.getFullYear() == new Date().getFullYear() && D.getMonth() == new Date().getMonth()) {
        calendar += '<td class="today">' + i;
      }else{
        calendar += '<td>' + i;
      }
      if (new Date(D.getFullYear(),D.getMonth(),i).getDay() == 0) {
        calendar += '<tr>';
      }
    }
    for(var  i = DNlast; i < 7; i++) calendar += '<td>&nbsp;';
    document.querySelector('#'+id+' tbody').innerHTML = calendar;
    document.querySelector('#'+id+' thead td:nth-child(2)').innerHTML = month[D.getMonth()] +' '+ D.getFullYear();
    document.querySelector('#'+id+' thead td:nth-child(2)').dataset.month = D.getMonth();
    document.querySelector('#'+id+' thead td:nth-child(2)').dataset.year = D.getFullYear();
    if (document.querySelectorAll('#'+id+' tbody tr').length < 6) {  // чтобы при перелистывании месяцев не "подпрыгивала" вся страница, добавляется ряд пустых клеток. Итог: всегда 6 строк для цифр
        document.querySelector('#'+id+' tbody').innerHTML += '<tr><td>&nbsp;<td>&nbsp;<td>&nbsp;<td>&nbsp;<td>&nbsp;<td>&nbsp;<td>&nbsp;';
    }
    }
    Calendar2("calendar2", new Date().getFullYear(), new Date().getMonth());
    // переключатель минус месяц
    document.querySelector('#calendar2 thead tr:nth-child(1) td:nth-child(1)').onclick = function() {
      Calendar2("calendar2", document.querySelector('#calendar2 thead td:nth-child(2)').dataset.year, parseFloat(document.querySelector('#calendar2 thead td:nth-child(2)').dataset.month)-1);
    }
    // переключатель плюс месяц
    document.querySelector('#calendar2 thead tr:nth-child(1) td:nth-child(3)').onclick = function() {
      Calendar2("calendar2", document.querySelector('#calendar2 thead td:nth-child(2)').dataset.year, parseFloat(document.querySelector('#calendar2 thead td:nth-child(2)').dataset.month)+1);
    }


var classik = document.getElementsByClassName("main-menu");
var drop = document.getElementsByClassName("drop");
var pip = true;
var tyu = true;
var countrys = document.getElementsByClassName("countrys");
var shift = document.getElementsByClassName("small-block__shift");
var calind = document.getElementsByClassName("calendar");
var travels = document.getElementsByClassName("travels");
var journey = document.getElementsByClassName("journey");
var over = document.getElementsByClassName("over-menu");
var htm = document.getElementsByTagName("body");

function cros(param) {
    if (tyu) {
        over[0].style.pointerEvents = "none";
        over[0].style.opacity = "0";

    }
}

function ascent(param) {
    if (pip) {
        over[0].style.pointerEvents = "all";
        over[0].style.opacity = "1";

    }
}

function press(param) {
    if (pip) {
        classik[0].style.borderRadius = "29.5px";
        drop[0].style.display = "none";
    }
    else {
        classik[0].style.borderRadius = "29.5px 29.5px 0 0";
        drop[0].style.display = "block";
    }
    pip = !pip;
}

function trav(params) {
    if (pip) {
        travels[0].style.borderRadius = "29.5px 29.5px 0 0";
        journey[0].style.display = "block";
    }
    else {
        travels[0].style.borderRadius = "29.5px";
        journey[0].style.display = "none";
    }
    pip = !pip;
}

function pressing(params) {
    if (pip) {
        classik[1].style.borderRadius = "29.5px 29.5px 0 0";
        calind[0].style.display = "block";
    }
    else {
        classik[1].style.borderRadius = "29.5px";
        calind[0].style.display = "none";
    }
    pip = !pip;
}

function country(param) {
    if (pip) {
        countrys[0].style.display = "none";
    }
    else {
        countrys[0].style.display = "block";
    }
    pip = !pip;
}