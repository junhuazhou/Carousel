$(function () {
    


    var index = 1;
    var timer;
    var interval = 2000;
    $('#next').click(function () {
        if (index == 5) {
            $("#list").animate({"left": "-3599px"},500);
            $("#list").animate({"left": "-600px"},0.1);
            index = 1;
            showButtons();
        }
        if ($("#list").is(":animated")) {
            return;
        }
        else {
            $("#list").animate({left: "-=600px"}, 500);
            index++;
        }
        showButtons();
    })
    $('#prev').click(function () {
        index--;
        if (index == 0) {
            $("#list").css("left", "-3000px");
            index = 5;
        }
        else {
            $("#list").animate({left: "+=600px"});
        }
        showButtons()
    })
    $('.container').hover(stop, play);
    play();


    function showButtons() {
        $('#buttons span').eq(index - 1).addClass("on").siblings().removeClass();
    }

    function play() {
        timer = setTimeout(function () {
            $("#next").trigger('click');
            play();
        }, interval);
    }

    function stop() {
        clearTimeout(timer);
    }
})
