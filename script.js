function callFunction(fun){
  fun();
}

var sayBye = function(){
  console.log('bye');
};

callFunction(sayBye);