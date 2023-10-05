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
    fontFamily = document.getElementById("monospaced").textContent;
    console.log(fontFamily);
    
    if (fontFamily == "Monospaced") {
        document.getElementById('_font').style.fontFamily = 'Neue Montreal Mono';
        document.getElementById('monospaced').innerHTML= 'Normal';
    } else {
        document.getElementById('_font').style.fontFamily = 'Neue Montreal';
        document.getElementById('monospaced').innerHTML= 'Monospaced';
    }
}


