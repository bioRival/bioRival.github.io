let IS_MIC_PRESSED = false;

// Keeps track of which gags were already shown to user
const ACTIVE_GAGS = {
    "hello": true,
    "whatsup": true,
    "finisher": true,
}

// Adding [].sample() function to pick a random object out of array
Array.prototype.sample = function(){
    return this[Math.floor(Math.random()*this.length)];
  }

// Creating sleep function, cuz javascript has none -_-
const sleep = (delay) => new Promise((resolve) => setTimeout(resolve, delay))

function mic_button_click() {
    const line = document.querySelector('.hr_white_line');
    const form = document.querySelector('#textarea_container_inner');
    const mic = document.getElementById("mic");

    if (IS_MIC_PRESSED) {
        form.style.visibility = "visible";
        line.style.visibility = "collapse";
        mic.classList.add("mic_button");
        mic.classList.remove("mic_button_recording");
        IS_MIC_PRESSED = false;
    } else {
        form.style.visibility = "collapse";
        line.style.visibility = "visible";
        mic.classList.add("mic_button_recording");
        mic.classList.remove("mic_button");
        IS_MIC_PRESSED = true;
    }
    
}

function disable_ui(disable=true) {
    if (disable) {
        document.querySelector('.send_button').disabled = true;
        document.querySelector('.mic_button').disabled = true;
    } else {
        document.querySelector('.send_button').disabled = false;
        document.querySelector('.mic_button').disabled = false;
    }
    
}

function appearChars(str, elem, timeBetween) {
    var voice_sans = new Audio('sound/voice_sans.mp3');
    voice_sans.load();

    var index = -1;
    (function go() {
        if (++index < str.length) {
            elem.innerHTML = elem.innerHTML + str.charAt(index);
            setTimeout(go, timeBetween);

            if (str.charAt(index) !== " ") {
                voice_sans.load();
                voice_sans.play();
            }
        }
    })();
}

function speak_sans(text="I've got nothing to say") {
    IS_SEND_BTN_PRESSED = true;
    let elem = document.querySelector('.talk_bubble');
    elem.innerHTML = "";
    let str = text;
    let timeBetween = 60;

    appearChars(str, elem, timeBetween);
}

async function joke_no_friends() {
    disable_ui();
    speak_sans("Давай-ка позовём всех твоих друзей на большую");
    await sleep(3000);
    speak_sans("шумную вечеринку. Там будет пирог, и хот-доги, и...");
    await sleep(4000);
    speak_sans("хммм... стоп... что-то не так.");
    await sleep(3000);
    speak_sans("У тебя нет друзей.");
    await sleep(3000);
    disable_ui(false);
}

async function joke_killer() {
    disable_ui();

    var MEGALOVANIA = new Audio('sound/MEGALOVANIA.mp3');
    MEGALOVANIA.load();

    speak_sans("Эммм....");
    await sleep(3000);
    speak_sans("Хммм.... Я, нет, ааа...");
    await sleep(3000);
    speak_sans("Окей, я должен признаться");
    await sleep(3000);
    speak_sans("У меня закончились все шутки.");
    await sleep(3000);
    speak_sans("Но знаешь, это даже хорошо.");
    await sleep(3000);

    document.querySelector("#sans_picture").src = "img/sans_moving.gif"
    speak_sans("Пора размять косточки,");
    await sleep(2000);
    speak_sans("Когда у меня заканчивается материал");
    await sleep(3000);
    speak_sans("что дальше?");
    await sleep(2000);

    document.querySelector("#sans_picture").src = "img/sans_eye.gif";
    MEGALOVANIA.play();
    speak_sans("Т В О Я О Ч Е Р Е Д Ь У М Е Р Е Т Ь");
    await sleep(4000);
    speak_sans("");
    await sleep(3000);

    document.querySelector("#sans_picture").src = "img/sans_moving.gif";
    speak_sans("Надеюсь, ты все еще помнишь как сражаться.");
    await sleep(4000);
    speak_sans("Если нет");
    await sleep(1000);
    speak_sans("не думай, что я буду играть в поддавки");
    await sleep(3000);
    speak_sans("Начнем.");
    await sleep(2000);
    speak_sans("");
    await sleep(2000);
    MEGALOVANIA.pause();
    await sleep(2000);

    document.querySelector("#sans_picture").src = "img/sans.png";
    speak_sans("Хехе. Напугал тебя до мозга костей? А?");
    await sleep(4000);
    speak_sans("Расслабься, у меня сегодня выходной.");
    await sleep(3000);

    disable_ui(false);
}

async function joke_toriel() {
    disable_ui();
    speak_sans("Эй! Позволь рассказать тебе историю.");
    await sleep(3000);
    speak_sans("Итак, я часовой в лесу Снежнеграда, ага?");
    await sleep(3000);
    speak_sans("Я сижу там и выслеживаю людей. Это довольно скучно.");
    await sleep(4000);
    speak_sans("К счастью глубоко в лесу есть огромная запертая дверь.");
    await sleep(4000);
    speak_sans("И на ней просто идеально тренировать тук-тук шутки.");
    await sleep(4000);
    speak_sans("И в один день, я постучался, как обычно.");
    await sleep(3000);
    speak_sans("Я постучал в дверь и сказал: «Тук-Тук».");
    await sleep(3000);
    speak_sans("Неожиданно с другой стороны раздался женский голос:");
    await sleep(5000);
    speak_sans("«Кто там?»");
    await sleep(2000);
    speak_sans("И я, естественно, ответил: «Доставка».");
    await sleep(3000);
    speak_sans("«Доставка чего?»");
    await sleep(2000);
    speak_sans("«Доставка очень плохих шуток!»");
    await sleep(3000);
    speak_sans("Затем она просто разрыдалась от смеха.");
    await sleep(3000);
    speak_sans("Как будто это была лучшая шутка,");
    await sleep(3000);
    speak_sans("которую она слышала за сто лет.");
    await sleep(3000);
    speak_sans("И я продолжал шутить, а она продолжала смеяться.");
    await sleep(3500);
    speak_sans("Несколько часов мы с ней обменивались шутками.");
    await sleep(3000);
    speak_sans("В итоге, мне пора было уходить.");
    await sleep(3000);
    speak_sans("Но женщина сказала, чтобы я приходил снова и я так и сделал.");
    await sleep(4000);
    speak_sans("Затем я пришел опять. И ещё раз. Это стало фишкой.");
    await sleep(3500);
    speak_sans("Однако, в один день, я заметил,");
    await sleep(3000);
    speak_sans("что она смеётся не так, как обычно.");
    await sleep(3000);
    speak_sans("Я спросил её, что же случилось.");
    await sleep(3000);
    speak_sans("И она сказала мне нечто странное.");
    await sleep(3000);
    speak_sans("Если когда-нибудь через эту дверь пройдет человек,");
    await sleep(3500);
    speak_sans("пожалуйста, можешь пообещать мне кое-что?");
    await sleep(3000);
    speak_sans("Пообещай, что будешь приглядывать за ним и защищать?»");
    await sleep(4000);
    speak_sans("С тех пор, я ненавижу давать обещания.");
    await sleep(3000);
    speak_sans("Но той, кто так искренне любит плохие шутки,");
    await sleep(3000);
    speak_sans("просто невозможно сказать «нет».");
    await sleep(3000);
    speak_sans("То обещание, что я дал ей.");
    await sleep(3000);
    speak_sans("Ты же догадываешься, что произошло бы,");
    await sleep(3500);
    speak_sans("если бы она ни о чём не просила?");
    await sleep(3000);
    speak_sans("... Приятель.");
    await sleep(3000);
    speak_sans(". . . Т ы б ы у м е р т а м , г д е с т о я л .");
    await sleep(4000);
    disable_ui(false);
}

async function joke_bad1() {
    disable_ui();
    speak_sans("Почему скелет молчит?");
    await sleep(3000);
    speak_sans("Он держит язык за зубами.");
    await sleep(2000);
    disable_ui(false);
}

async function joke_bad2() {
    disable_ui();
    speak_sans("Где подрабатывает скелет?");
    await sleep(3000);
    speak_sans("В кабинете Анатомии.");
    await sleep(2000);
    disable_ui(false);
}

async function joke_bad3() {
    disable_ui();
    speak_sans("Почему скелет-сплетник любит ходить в ванну?");
    await sleep(5000);
    speak_sans("Чтобы перемыть все косточки");
    await sleep(3000);
    disable_ui(false);
}

async function joke_bad4() {
    disable_ui();
    speak_sans("Чем скелет рисует?");
    await sleep(2000);
    speak_sans("Кистью.");
    await sleep(1000);
    disable_ui(false);
}

async function joke_bad5() {
    disable_ui();
    speak_sans("Играя в прятки со скелетом, где нужно его искать?");
    await sleep(5000);
    speak_sans("В шкафу.");
    await sleep(1000);
    disable_ui(false);
}

async function joke_bad6() {
    disable_ui();
    speak_sans("Почему скелеты устают на работе?");
    await sleep(4000);
    speak_sans("Потому что они выполняют тонну работы...");
    await sleep(4000);
    speak_sans("СКЕЛЕТОННУ.");
    await sleep(1000);
    disable_ui(false);
}

async function joke_bad7() {
    disable_ui();
    speak_sans("Люди часто меня спрашивают:");
    await sleep(3000);
    speak_sans("*Санс, почему ты постоянно улыбаешься?*");
    await sleep(3500);
    speak_sans("И я им отвечаю:");
    await sleep(2000);
    speak_sans("*Потому что моя жизнь - это шутка.*");
    await sleep(3000);
    disable_ui(false);
}

async function joke_bad8() {
    disable_ui();
    speak_sans("Меня называют ленивым, но это не так.");
    await sleep(3000);
    speak_sans("Я заработался так сильно,");
    await sleep(2000);
    speak_sans("Что из кожи вон вылез.");
    await sleep(2000);
    disable_ui(false);
}

async function joke_bad9() {
    disable_ui();
    speak_sans("Детеныш белки-летяги с рождения хочет");
    await sleep(3000);
    speak_sans("научиться летать, но в итоге всю жизнь только");
    await sleep(4000);
    speak_sans("планирует.");
    await sleep(1000);
    disable_ui(false);
}

async function joke_bad10() {
    disable_ui();
    speak_sans("Как называется ленивый динозавр?");
    await sleep(3000);
    speak_sans("ВЯЛОЦАРАПТОР");
    await sleep(2000);
    disable_ui(false);
}

const JOKE_LIST = [
    joke_no_friends, 
    joke_toriel,
    joke_bad1,
    joke_bad2,
    joke_bad3,
    joke_bad4,
    joke_bad5,
    joke_bad6,
    joke_bad7,
    joke_bad8,
    joke_bad9,
    joke_bad10,
];






// async needed for "await sleep" to work
async function send_button_click() {
    const textarea = document.querySelector('textarea');
    const user_text = textarea.value.toLowerCase();
    textarea.value = "";

    if (user_text.includes("привет") && ACTIVE_GAGS["hello"]) {
        ACTIVE_GAGS["hello"] = false;
        disable_ui();

        const fart = new Audio('sound/fart.mp3');
        speak_sans("Повернись и пожми мне руку");
        await sleep(3000);
        speak_sans("");
        fart.play();
        await sleep(4500);
        speak_sans("Ха ха ха, старый трюк с подушкой-пердушкой");
        await sleep(4000);
        disable_ui(false);
    } else if ((user_text.includes("как") && user_text.includes("дела"))
                && ACTIVE_GAGS["whatsup"]) {
        ACTIVE_GAGS["whatsup"] = false;
        disable_ui();

        speak_sans("Как дела? Как кость бела!");
        await sleep(3000);

        disable_ui(false);
    } else {
        var joke = JOKE_LIST.sample();
        if (joke) {
            joke();

            // Remove that joke from the list, so it won't be repeated
            const index = JOKE_LIST.indexOf(joke);
            JOKE_LIST.splice(index, 1);
        } else {
            if (ACTIVE_GAGS["finisher"]) {
                ACTIVE_GAGS["finisher"] = false;
                joke_killer();
            } else {
                disable_ui();

                speak_sans("Но серьезно, приятель, материал закончился.");
                await sleep(4000);
                speak_sans("Можешь все обновить и начать с чистого листа.");
                await sleep(4000);
    
                disable_ui(false);
            }

        }
        
    }
}

