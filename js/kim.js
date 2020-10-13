document.getElementById('player').addEventListener("mouseover",sumarveces_que_me_rechazas);

veces_que_me_rechazas = 0;
tiempo = 0;
necesarios  = 0;
function sumarveces_que_me_rechazas(){
   veces_que_me_rechazas++;
   document.getElementById("veces_que_me_rechazas").innerHTML = "<b>" + ""  +  " "  +  ""  +  "</b>" ;
   randNum  =   Math.round(Math.random()*150);
   randNum2  =   Math.round(Math.random()*150);
   document.getElementById("player").style.marginTop = randNum + "px";
   document.getElementById("player").style.marginLeft = randNum2 + "px";
}

