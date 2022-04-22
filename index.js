for(let i=0;i<document.querySelectorAll(".drum").length;i++) 
    document.querySelectorAll(".drum")[i].addEventListener("click" , function(){
    if(i == 0) var audio = new Audio('sounds/tom-1.mp3');
    else if(i == 1) var audio = new Audio('sounds/tom-2.mp3');
    else if(i == 2) var audio = new Audio('sounds/tom-3.mp3');
    else if(i == 3) var audio = new Audio('sounds/tom-4.mp3');
    else if(i == 4) var audio = new Audio('sounds/snare.mp3');
    else if(i == 5) var audio = new Audio('sounds/crash.mp3');
    else var audio = new Audio('sounds/kick-bass.mp3');
    audio.play();
    buttonAnimation(this.innerHTML);
});
function makeSound(key){
    if(key == 'w') var audio = new Audio('sounds/tom-1.mp3');
    else if(key == 'a') var audio = new Audio('sounds/tom-2.mp3');
    else if(key == 's') var audio = new Audio('sounds/tom-3.mp3');
    else if(key == 'd') var audio = new Audio('sounds/tom-4.mp3');
    else if(key == 'j') var audio = new Audio('sounds/snare.mp3');
    else if(key == 'k') var audio = new Audio('sounds/crash.mp3');
    else if(key == 'l') var audio = new Audio('sounds/kick-bass.mp3');
    audio.play();
}
document.addEventListener("keydown" , function(event){
    makeSound(event.key);
    buttonAnimation(event.key);
});
function buttonAnimation(currentKey){
    var activeButton = document.querySelector("." + currentKey).classList.add("pressed");
    setTimeout(function(){
        document.querySelector("." + currentKey).classList.remove("pressed");
    },200);
}