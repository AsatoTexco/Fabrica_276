function calc(){

    const porcent = document.getElementById("porcent");
    const porcetAtual = document.getElementById("porcentagemA");
    const pizza = document.getElementById("pizza");
    var result = (360 * porcent.value) / 100;
    // alert(result)
    
    pizza.style.background = "conic-gradient(rgb(0, 115, 255) " + result + "deg, #0000 0 )"
    if(porcent.value !== ""){


        porcetAtual.innerText = porcent.value+"%"

    }else{

        porcetAtual.innerText = "0%"
    }

    porcent.value.innerText = "";
}