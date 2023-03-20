

const elemento_chute = document.getElementById('chute')

window.SpeechRecognition = window.SpeechRecongnition || webkitSpeechRecognition;
const recognition = new SpeechRecognition()
recognition.lang =  'pt-Br' ; 
recognition.start();
recognition.addEventListener('result', onSpeak)

function onSpeak(evento){
    chute = evento.results[0][0].transcript
    exibe_chute(chute)
    verifica_valor_valido(chute)
    

}
function exibe_chute(chute){
    elemento_chute.innerHTML = `
        <div>Você disse</div>
        <span class="box">${chute}</span>
     `
}
recognition.addEventListener('end',()=>{
    recognition.start()
})
