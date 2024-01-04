const btnStart = document.getElementById('btnStart');
const btnStop = document.getElementById('btnStop');
const textArea = document.getElementById('textArea');

const recognition = new webkitSpeechRecognition();

recognition.recognition = true;
recognition.lang = 'es-ES';
recognition.interimResult = true;

btnStart.addEventListener('click', () =>{
    recognition.start();
});

btnStop.addEventListener('click', () =>{
    recognition.stop();
});

recognition.onresult = (event) =>{
    console.log(event);
    const texto = event.results[0][0].transcript;
    console.log(texto);
    textArea.value = texto;
}