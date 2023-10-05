let counter = 0;
let counter2 = 0;
let opacity = 0.5;


if(document.getElementById('page')==null) {
    let timer2 = setInterval(() => {
        document.getElementById('_t1').style.opacity = opacity;
        document.getElementById('_t2').style.opacity = opacity;
        opacity = opacity - 0.005;
        counter2++;
        if (counter2 == 200) {
            clearInterval(timer2);
        }
    }, 12.5);
    
    let timer = setInterval(() => {
        let div = document.getElementById("EnterView");
        div.remove();
        counter++;
        if (counter == 1) {
            clearInterval(timer);
        }
    }, 3000);
    
} else {
    let div = document.getElementById("EnterView");
    div.remove();
}

function changeFont() {
    let fontFamily = document.getElementById("monospaced").textContent;
    if (fontFamily == "Monospaced") {
        document.getElementById('_font').style.fontFamily = 'Inconsolata_Condensed-Light';
        document.getElementById('monospaced').innerHTML= 'Normal';
        document.getElementById('fontFamily_selector').innerHTML= '□';
    } else {
        document.getElementById('_font').style.fontFamily = 'SpaceGrotesk-Light';
        document.getElementById('monospaced').innerHTML= 'Monospaced';
        document.getElementById('fontFamily_selector').innerHTML= '■';
    }
}

function changeDark() {
    let lightselector = document.getElementById("light").textContent;
    if (lightselector == "Light") {
        document.getElementById('Page').style.backgroundColor = '#0D0D0D';
        document.getElementById('image').style.opacity = '0.9';
        document.getElementById('light').innerHTML= 'Dark';
        document.getElementById('light_selector').innerHTML= '■';
    } else {
        document.getElementById('Page').style.backgroundColor = '';
        document.getElementById('image').style.opacity = '';
        document.getElementById('light').innerHTML= 'Light';
        document.getElementById('light_selector').innerHTML= '□';
    }
}