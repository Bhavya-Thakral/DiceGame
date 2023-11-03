var random = Math.floor((Math.random()*6)+1);
//console.log(random);
var random2 = Math.floor((Math.random()*6)+1);



if(random===1){
    document.querySelectorAll("img")[0].setAttribute ("src","./images/dice1.png");
}
else if(random===2){
    document.querySelectorAll("img")[0].setAttribute ("src","./images/dice2.png");
}
else if(random===3){
    document.querySelectorAll("img")[0].setAttribute ("src","./images/dice3.png");

}
else if(random===4){
    document.querySelectorAll("img")[0].setAttribute ("src","./images/dice4.png");
}
else if(random===5){
    document.querySelectorAll("img")[0].setAttribute  ("src","./images/dice5.png");
}
else{
    document.querySelectorAll("img")[0].setAttribute  ("src","./images/dice6.png");
}





if(random2===1){
    document.querySelectorAll("img")[1].setAttribute ("src","./images/dice1.png");
}
else if(random2===2){
    document.querySelectorAll("img")[1].setAttribute ("src","./images/dice2.png");
}
else if(random2===3){
    document.querySelectorAll("img")[1].setAttribute ("src","./images/dice3.png");

}
else if(random2===4){
    document.querySelectorAll("img")[1].setAttribute ("src","./images/dice4.png");
}
else if(random2===5){
    document.querySelectorAll("img")[1].setAttribute  ("src","./images/dice5.png");
}
else{
    document.querySelectorAll("img")[1].setAttribute  ("src","./images/dice6.png");
}


if(random>random2){
    document.querySelector("h1").innerHTML="Player 1 wins!";
}
else if(random<random2){
    document.querySelector("h1").innerHTML="Player 2 wins!";
}
else{
    document.querySelector("h1").innerHTML="Draws!";

}