
function textToSpeech() {
    let text = document.getElementById('textInput').value;
    let speech = new SpeechSynthesisUtterance();
    speech.text = text;
    window.speechSynthesis.speak(speech);
}

const sounds = ['Ah-ha', 'Back of the net', 'Bang out of order', 'Dan', 'Email of the evening', 'Hello partridge', 'I ate so much egg', 'Im confused','Jurassic'];

sounds.forEach(sound => {
    const btn = document.createElement('button');
    
    btn.classList.add('btn');
    
    btn.innerText = sound;
    
    btn.addEventListener('click', () => {
        document.getElementById(sound).play();
    });
    
    document.getElementById('buttons').appendChild(btn);
});
