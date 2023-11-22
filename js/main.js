$( document ).ready(function() {

    let IS_EMOTION_TEXT_VISIBLE = false;


// Hides or Shows the Text next to Emojis when picking a video
function toggleEmotionText() {
    btn = $('.youtube-area .youtube-container .mood-picker .mood-button');
    btn_text = $('.youtube-area .youtube-container .mood-picker .mood-button p');
    btn_container = $('.youtube-area .youtube-container .mood-picker');
    
    if (!IS_EMOTION_TEXT_VISIBLE) {
        btn_text.css('display', 'block');
        btn.css('border-radius', '10px');
        btn_container.css('justify-content', 'flex-start');
        IS_EMOTION_TEXT_VISIBLE = true;
    } else {
        btn_text.css('display', 'none');
        btn.css('border-radius', '50%');
        btn_container.css('justify-content', 'space-between');
        IS_EMOTION_TEXT_VISIBLE = false;
    }
    
}



function pickMood() {
    function restoreDefault(IS_EMOTION_TEXT_VISIBLE) {
        btns = $('.youtube-area .youtube-container .mood-picker .mood-button');
        btns_text =$('.youtube-area .youtube-container .mood-picker .mood-button p');
        if (IS_EMOTION_TEXT_VISIBLE) {
            btns_text.css({
                'color': 'rgb(192, 192, 192)'
            });
            btns.css({
                'background-color': 'var(--bg-strong-color)',
                'outline': 'none',
            });
        } else {
            btns_text.css({
                'display': 'none',
                'color': 'rgb(192, 192, 192)',
            });
            btns.css({
                'border-radius': '50%',
                'background-color': 'var(--bg-strong-color)',
                'outline': 'none',
            });
        }
    }

    restoreDefault(IS_EMOTION_TEXT_VISIBLE);
    
    btn = $(this);
    btn_text = btn.children('p');

    btn.css({
        'background-color': 'var(--bg-light-color)',
        'outline': '2px solid var(--bg-strong-color)'
    });

    if (IS_EMOTION_TEXT_VISIBLE) {
        btn_text.css({
            'color': 'black'
        });
    } else {
        btn_text.css({
            'display': 'block',
            'color': 'black'
        });
        btn.css({
            'border-radius': '10px'
        });
    }

}

$('.youtube-area .youtube-container .mood-picker .mood-button').click(pickMood);
$('.youtube-area .youtube-container .mood-picker-toggle .mood-text-button').click(toggleEmotionText);
});

