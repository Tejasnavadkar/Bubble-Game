
var timer = 30;
var score = 0;
var hitrn;  /*so now it's global scope variable so we can use it anywhere */
function increasescore(){
    score += 10;
    document.querySelector("#scoreval").textContent=score;
}

function getnewhit(){

    hitrn = Math.floor(Math.random()*10);
    document.querySelector("#hitval").textContent=hitrn;

}

function makebubble(){
    
var clutter=""

for(var i = 1 ; i<=189 ; i++){            /* to create bubble using js instead of with css one by one */
    
    var rn = Math.floor(Math.random()*10)   /*to creat bubble number each time differnet */
   clutter += `<div class="bubble">${rn}</div>`;

}

document.querySelector("#pbtm").innerHTML=clutter;  /* to print in pbtm */
}

function runTimer(){
 var timerid = setInterval(() => {

    if(timer>0){
        timer--;
    document.querySelector("#timerval").textContent=timer;
    }

    else{
        
        hitrn=0;
        clearInterval(timerid);     /*to clear time interval becauz it occupy extra memory */
    
        document.querySelector("#pbtm").innerHTML=`<div id="conclusion"><h1>Game Over</h1>
        <h1>Your Score : ${score}</h1></div>`;
        
        document.querySelector("#hitval").textContent=hitrn;
        

   
    }

 }, 1000);

}

document.querySelector("#pbtm").addEventListener("click",function(details){
   var clickednum = Number(details.target.textContent)     /*so here details.target parameter provide us element i.e <div>5</div> & details.target.textcontent gives the actual value inside but this value is string so we use Number() to convert it in number */
    
   if(clickednum === hitrn){

    increasescore();
    makebubble();    /* to refresh new bubble and give new hit value */
    getnewhit();
   }

})

makebubble();
getnewhit();
runTimer();
