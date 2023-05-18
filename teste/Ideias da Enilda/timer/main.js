
const botao = document.getElementById("btn_start");


function start(){


    
    const barraN = document.getElementById("barraN");





    

    const min = document.getElementById("minute");
    const sec = document.getElementById("second");
    var contPorcent = 0;

    const audio = new Audio('Bells.mp3');

    var contSec = 00;
    var contMin = 25;
    var contador = 0;
    
    
    var inputMin = document.getElementById("minutes_input").value;  
    if(inputMin !== ""){


        contMin = inputMin;
        contSec = 00

    }else{

        contMin = 25;
    }
    var min_sec =  contMin * 60;

    

    barraN.style.transition = "all ease-in-out "+min_sec+"s";
    barraN.style.width = '100%';
    
    for(i = 1; i < 5; i++){

        console.log(i)
    }



    setInterval(function sec_add(){ 
        
        // console.log(porcentMin);

        if(contSec == 0  && contMin == 0){
            audio.play();
            setInterval(function reload(){

                window.location.reload(true);

            } , 3000)
            
        }else{
            contador += 1;
            if(contador == 300){
                audio.play();
                contador = 0;
            }
            if(contSec == 0){
                contSec = 59;
                contMin -= 1;
            }else{
                contSec -= 1;
            }
            sec.innerText = contSec;
            min.innerText = contMin;
        }
        var qntSecMin = contMin * 60

        var totalSec = qntSecMin + contSec
        
        // se estiver na metade do tempo muda a cor para azul
        if(totalSec == (min_sec / 2)){

            document.body.style.backgroundColor = "rgb(0, 68, 107)"
            document.getElementById("area").style.backgroundColor = "rgb(87 151 211)"
            document.getElementById("area").style.boxShadow = "4px 4px 2px rgb(0, 35, 68)";
            document.getElementById("btn_start").style.backgroundColor = ""
        }
        // se estiver na metade da metade (1/4) do tempo muda a cor para verde
        if(totalSec == (  (min_sec / 2) / 2)  ){

            document.body.style.backgroundColor = "rgb(20, 0, 53)"

        }


        

    },100);



    

    botao.setAttribute("onclick","stop()");
    botao.setAttribute("class","verde");
    
    botao.innerText = "Resetar";
}

function stop(){
    window.location.reload(true);

}