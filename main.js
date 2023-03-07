
 let theClock= document.getElementById("clock");

function clock(){
  
  
  let date= new Date();
  let hours=date.getHours();
  let minutes=date.getMinutes();
  let seconds=date.getSeconds();
  let flag ="AM";
  
  
  //converting 24 to 12 system
  if(hours==0){
    hours=12;
  }
  
  if(hours>12){
    hours=hours-12;
    flag="PM";
  }
  
  
  
  // adding 0 when it is one digit
  if(hours<10){
    hours="0"+ hours;
    
  }
  
  if(minutes<10){
        minutes="0"+ minutes;

  }
  
  if(seconds<10){
      seconds="0"+ seconds;

    
  }
  
  theClock.innerText=`${hours} : ${minutes} : ${seconds} : ${flag}`;
  
  
  setTimeout(function(){
    clock();
  },1000);
  


}


 clock();