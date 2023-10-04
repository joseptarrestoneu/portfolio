let counter = 0;
let timer = setInterval(() => {
    let div = document.getElementById("EnterView");
    div.remove();
    counter++;
    if (counter == 1) {
        clearInterval(timer);
    }
}, 3000);

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
