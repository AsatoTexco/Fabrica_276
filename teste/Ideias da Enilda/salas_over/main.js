const over = document.getElementById("geral_over");
const text = document.getElementById("area_text");
const  area_img = document.getElementById("area_img_conformidade");
const text_def = document.getElementById("content_text_default");

function mostrarOver(){
    // alert("passou o mouse")
    over.style.display = "flex";
    text.style.display = "none";
    area_img.style.display = "none";
    text_def.style.display= "none"

}

function sumirOver(){

    over.style.display = "none";
    text.style.display = "flex";
    area_img.style.display = "flex";
    text_def.style.display= "flex"

}