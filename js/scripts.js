$(function(){
    var checkboxs = $(".checkbox");

    checkboxs.click(function(){
        var mark = $(this).find(".check-mark");
        if(mark.is(":hidden")) mark.show();
        else mark.hide();
    });

    $("#phone").mask("+7 999 999 9999");
})