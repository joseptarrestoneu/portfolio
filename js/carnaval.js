const playSound = function() {
    let element = document.createElement('div');
    element.setAttribute('style', 'display: none');
    element.innerHTML = `
        <audio autoplay loop>
            <source src="audios/odaCarnaval.ogg" type="audio/ogg">
            <source src="audios/odaCarnaval.wav" type="audio/wav">
            <source src="audios/odaCarnaval.mp3" type="audio/mpeg">
            <source src="audios/odaCarnaval.flac" type="audio/flac">
            No soportat pel navegador
        </audio>
    `;
    document.body.appendChild(element);
    document.removeEventListener('click', playSound);
}

    document.addEventListener("click", playSound);

