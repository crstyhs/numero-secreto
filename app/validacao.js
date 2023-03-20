function verifica_valor_valido(chute){
    const numero = +chute
    if(Number.isNaN(numero)){
        if (chute.toUpperCase() === "GAME OVER") {

            document.body.innerHTML =
                `
                <h2>Game Over!!!</h2>
                <h3>Pressione o botão para jogar novamente</h3>
                <button id="retry" class="btn-jogar" >Jogar novamente</button>
                `
                document.body.style.backgroundColor = "black";
        }else{
        elemento_chute.innerHTML += '<div>Valor inválido</div>' ;
        return}
    }
    if(alem_limite(numero)){
        elemento_chute.innerHTML += `<div>Valor inválido: o número secreto precisa estar entre ${menor_valor} e ${maior_valor}</div>` ;
        return
    }
    if(numero === numero_secreto){
        document.body.innerHTML = `<h2>Você acertou!</h2> <h3>O número secreto era ${numero_secreto}</h3>
        <button id="retry" class="btn-jogar">Jogar novamente</button> `
    } 
    else if(numero > numero_secreto) {
        elemento_chute.innerHTML += `
        <div>O número secreto é menor <i class="fa-solid fa-down-long"></i></div>
        `
    } else{
        elemento_chute.innerHTML += `
        <div>O número secreto é maior <i class="fa-solid fa-up-long"></i></div>
        `
    }
}

function alem_limite(numero){
    return numero > maior_valor || numero < menor_valor
}

 document.body,addEventListener('click', evento => {
     if(evento.target.id == 'retry'){
         window.location.reload()
     }
 })