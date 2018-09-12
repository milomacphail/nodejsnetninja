var time = 0;


setInterval(function(){
  time += 2;
  console.log(time + 'seconds have passed');
  if (time > 5){
    clearInterval(timer);
  }
}, 2000);