const playSound = function() {
    let element = document.createElement('div');
    element.setAttribute('style', 'display: none');
    element.innerHTML = `
        <audio autoplay loop>
            <source src="assets/audios/odaCarnaval.ogg" type="audio/ogg">
            <source src="assets/audios/odaCarnaval.wav" type="audio/wav">
            <source src="assets/audios/odaCarnaval.mp3" type="audio/mpeg">
            <source src="assets/audios/odaCarnaval.flac" type="audio/flac">
            No soportat pel navegador
        </audio>
    `;
    document.body.appendChild(element);
    document.removeEventListener('click', playSound);
}

    document.addEventListener("click", playSound);

