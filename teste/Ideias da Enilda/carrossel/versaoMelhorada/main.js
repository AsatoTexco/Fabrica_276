var img_slide = document.getElementsByClassName("img_slide");
 
var largura = window.screen.width;

tamanhoImagem = img_slide[1].width + 10

if((img_slide % 2) == 0){

    var metade = Math.round((img_slide.length ) / (largura / tamanhoImagem)) 

}else{

    var metade = Math.round((img_slide.length - 1) / (largura / tamanhoImagem)) 

}

var qntNext = tamanhoImagem;

var max = (qntNext * img_slide.length) - tamanhoImagem

var dif = 0
var difB = 0
 
setInterval(printar,100)

setInterval(next,10000)

function printar(){

    console.log(qntNext);

}

function next(){

    if(qntNext == 0){

        for(let i = 0; i< img_slide.length ; i++){
            
            img_slide[i].style.right = tamanhoImagem + "px"

        }
        qntNext += tamanhoImagem
     
    }else{
        
        if(qntNext <=  max){
            
            dif = tamanhoImagem

            for(let i = 0; i< img_slide.length ; i++){
            
                img_slide[i].style.right = (qntNext + difB) + "px"
    
            }

            qntNext += tamanhoImagem

        }else{
             
            qntNext = tamanhoImagem 
    
            for(let i = 0; i< img_slide.length ; i++){
                

                img_slide[i].style.right = 0 + "px"
    
            }
        }
    }   
}


function back(){
    
    
    if(qntNext > tamanhoImagem){

        if(dif == 0){

            dif = tamanhoImagem

        }
        qntNext =  qntNext  - dif 
         
        for(let i = 0; i< img_slide.length ; i++){
        
            img_slide[i].style.right = qntNext - tamanhoImagem + "px"
    
        }

    }else{
    
        for(let i = 0; i< img_slide.length ; i++){
        
            img_slide[i].style.right = (max  ) + "px"
    
        }
         
        qntNext = max + tamanhoImagem

    }
      
}