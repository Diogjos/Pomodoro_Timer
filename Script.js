
const segundosEl = document.querySelector("#segundos");
const startBtn = document.querySelector("#start");
const resetBtn = document.querySelector("#reset");
const continueBtn = document.querySelector("#continue");
const pauseBtn = document.querySelector("#pause");



let intervalo;
let pausado = false;
let segundos = 60;
let ajuste_atividade = 25;
let ajuste_pausa = 5;
let pausa_atv = false


document.querySelector("#ajuste_atividade").innerHTML = ajuste_atividade;
document.querySelector("#minutos").innerHTML = (ajuste_atividade);
document.querySelector("#ajuste_pausa").innerHTML = ajuste_pausa;

function contador(minutos) {
    if (pausa_atv === true){
        minutos = ajuste_pausa;
    }
    minutos--;
    intervalo = setInterval(()=>{

        if(!pausado){

            segundos--;
            
            if(segundos === 0){
                minutos--;
                segundos = 59;
            }

            document.querySelector("#minutos").innerHTML = format(minutos);
            segundosEl.textContent = format(segundos);

        }

    },1000);


    startBtn.style.display = "none";
    pauseBtn.style.display = "inline";
}

function pausar(){
    pausado = true;
    pauseBtn.style.display = "none";
    continueBtn.style.display = "inline";
}

function continuar(){
    pausado = false;
    pauseBtn.style.display = "inline";
    continueBtn.style.display = "none";
}

function resetar(){
    clearInterval(intervalo);
    segundos = 60;
    pausado = false;
    
    if(pausa_atv === true){
        document.querySelector("#minutos").innerHTML = format(ajuste_pausa);
    } else {
        document.querySelector("#minutos").innerHTML = format(ajuste_atividade);
    }
    
    segundosEl.textContent = "00"

    startBtn.style.display = "inline";
    pauseBtn.style.display = "none";
    continueBtn.style.display = "none"

}

function format(tempo){
    return tempo < 10 ? `0${tempo}` : tempo;
}
function aumAtv(){
    ajuste_atividade++;
    document.querySelector("#ajuste_atividade").innerHTML = ajuste_atividade;
    document.querySelector("#minutos").innerHTML = ajuste_atividade;
}
function dmnAtv(){
    ajuste_atividade--;
    document.querySelector("#ajuste_atividade").innerHTML = ajuste_atividade;
    document.querySelector("#minutos").innerHTML = ajuste_atividade;
}
function aumPause(){
    ajuste_pausa++;
    document.querySelector("#ajuste_pausa").innerHTML = ajuste_pausa;
    document.querySelector("#minutos").innerHTML = format(ajuste_pausa);
}
function dmnPause(){
    ajuste_pausa--;
    document.querySelector("#ajuste_pausa").innerHTML = ajuste_pausa;
    document.querySelector("#minutos").innerHTML = format(ajuste_pausa);
}

function descanso(){
    pausa_atv = true;
    document.querySelector("#minutos").innerHTML = format(ajuste_pausa);
    resetar();
}
function atividade(){
    pausa_atv = false;
    document.querySelector("#minutos").innerHTML = format(ajuste_atividade);
    resetar();
}
