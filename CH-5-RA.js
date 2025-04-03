function textToSpeech() {
    let text = document.getElementById('textInput').value;
    let speech = new SpeechSynthesisUtterance();
    speech.text = text;
    window.speechSynthesis.speak(speech);
}


const sounds = ['RIZZ', 'Wag kang iiyak', 'Ang galing', 'Gumalaw', 'Gusto ko bulalo!', 'Look, Listen, Learn, & Listen', 'Kaon', 'GET READY', 'Mcdo'];
sounds.forEach(sound => {
    const btn = document.createElement('button');
    btn.classList.add('btn');
    btn.innerText = sound;
    
    btn.addEventListener('click', () => {
        document.getElementById(sound).play();
    });
    
    document.getElementById('buttons').appendChild(btn);
});


