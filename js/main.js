$( document ).ready(function() {




// Emoji Buttons for picking a mood 
// changes style based on choice, shows extra text
function pickMood() {
    function restoreDefault() {
        btns = $('.youtube-area .youtube-container .mood-picker .mood-button');
        btns_text =$('.youtube-area .youtube-container .mood-picker .mood-button p');
        
        btns.removeClass('active');
        btns_text.css({
            'display': 'none',
        });
        btns.css({
            'border-radius': '50%',
        });
    }

    restoreDefault();
    
    btn = $(this);
    btn_text = btn.children('p');
    btn.addClass('active');
    btn_text.addClass('active');
    btn_text.css({
        'display': 'block',
    });
    btn.css({
        'border-radius': '10px'
    });

}

// Emoji Buttons under a video
// change style based on user choice
function rateVideo() {
    btn = $(this);

    if (btn.hasClass('active')) {
        btn.removeClass('active');

        let number = btn.children('span').text();
        if (number === "") {number = 0}
        number = Number(number);
        number--;
        if (number <= 0) {
            btn.removeClass('rated');
            number = "";
        }
        btn.children('span').text(number);

        
    } else {
        btn.addClass('active');
        btn.addClass('rated');

        let number = btn.children('span').text();
        if (number === "") {number = 0}
        number = Number(number);
        number++;
        btn.children('span').text(number);
    }
    
}

$('.youtube-area .youtube-container .mood-picker .mood-button').click(pickMood);
$('.youtube-area .youtube-container .youtube-screen .rating .rating-item').click(rateVideo);
});

