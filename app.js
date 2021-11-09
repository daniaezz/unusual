let audio = document.getElementById("audioStory");
let play = document.getElementById("play");
let pause = document.getElementById("pause");
let click = document.getElementById("clicksound");
let forward = document.getElementById("forward");
let rewind = document.getElementById("rewind");

//turns off the shadow on click
play.addEventListener('click', () => {
  click.play();
  audio.play();
  document.getElementById("shadow1").style.display ="none";
  document.getElementById("shadow2").style.display ="block";
});

pause.addEventListener('click', () => {
  click.play();
  audio.pause();
  document.getElementById("shadow2").style.display ="none";
  document.getElementById("shadow1").style.display ="block";

});

forward.addEventListener('click', () =>{
    audio.currentTime += 30;
    document.getElementById("shadow3").style.display ="none";
    click.play();

    setTimeout(timeout1, 500);
});

rewind.addEventListener('click', () => {
  audio.currentTime -=30;
  document.getElementById("shadow4").style.display ="none";
  click.play();
  setTimeout(timeout2, 500);
});
//re-displays the shadow
//timeout for forward shadow
function timeout1(){
  document.getElementById("shadow3").style.display = "block";
};
//timeout for rewind shadow
function timeout2(){
  document.getElementById("shadow4").style.display = "block";
};


audio.addEventListener('timeupdate', (event) =>{

  //Keep lights off between 114 and 190
  if (event.target.currentTime > 114 && event.target.currentTime < 190){
    $(document.getElementById("black")).fadeIn(1000); //Time is in milliseconds
  };

  //Flickering effect
  if (event.target.currentTime > 196 && event.target.currentTime < 205){
    $(document.getElementById("black")).fadeToggle(300);
  };

  // keep lights on after 210s
  if (event.target.currentTime > 210){
    $(document.getElementById("black")).fadeOut(300);
  };

  //If user goes back to before the lights went out, turn lights on
  if (event.target.currentTime < 114 ){
    $(document.getElementById("black")).fadeOut(1000);
  };

   //Fade in cat eyes
  if (event.target.currentTime > 153 && event.target.currentTime < 162){
    $(document.getElementById("base")).fadeIn(1000);
  };

  // Second condition: If user press backward button during 153s and 162s, fade out cats eyes.
  if (event.target.currentTime > 162 || event.target.currentTime < 153){  //Fade out cat eyes
    $(document.getElementById("base")).fadeOut(1000);
  };
});

var eye = document.getElementsByClassName("ball");


document.onmousemove = function(){
  var x = event.clientX * 100 / window.innerWidth +"%";
  var y = event.clientY *100 / window.innerHeight + "%";

  for (var i=0; i<2; i++){
    eye[i].style.left =x;
    eye[i].style.top =y;
    eye[i].style.transform= "translate(-"+x+",-"+y+")";
  }

};
