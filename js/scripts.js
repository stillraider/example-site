$(function(){
    var overMenu = $(".over-menu");
    var body = $("body");

    $(".checkbox").click(function(){
        SwitchActive($(this).find(".check-mark"));
    });

    $(".small-block, .travels").click(function(){
        SwitchActiveAndRotateArrow($(this).parent().find(".drop, .calendar, .journey"));
    });

    $(".continents__text").click(function(){
        SwitchActive($(this).parent().find(".countrys"));
    });

    $(".cross").click(()=> ControlMenu("none", "0", "hidden scroll"));
    $(".burger").click(()=> ControlMenu("all", "1", "hidden"));

    function ControlMenu(pointerEvents, opacity, overflow) {
        overMenu.css("pointer-events", pointerEvents);
        overMenu.css("opacity", opacity);
        body.css("overflow", overflow);
    }

    function SwitchActiveAndRotateArrow(element) {
        let setRotateArrow = (rotateParam) => element.parent().find(".wrap__shift").css("transform", rotateParam);
        if(element.is(":hidden")){
            element.show();
            setRotateArrow("rotate(45deg)");
        }
        else {
            element.hide();
            setRotateArrow("rotate(-135deg)");
        }
    }

    function SwitchActive(element) {
        if(element.is(":hidden")) element.show();
        else element.hide();
    }
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

