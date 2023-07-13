var pc;
var user;

function getUserChoice(){
  return (prompt(`Escribe tu eleccion de jugar: Piedra, papel, o tijera. ->`));
}

function getPCChoice(){
  var number = Math.floor(Math.random()* 3 - 1 + 1);
  if(number == 0) {
    return "piedra";
  } else if(number == 1) {
    return  "papel";
  } else if(number == 2) {
    return  "tijera";
  } 
}

function winner(user, pc){
  if(user == pc) {
    return "empate";
  } else if ( (user == "papel" &&  pc == "piedra") || (user == "tijera" &&  pc == "papel")
           || (user == "piedra" &&  pc == "tijera")){
            return "ganaste";
 }else {
  return "perdiste";
 }
}

do {
  user = getUserChoice();
  pc = getPCChoice();
  var play = winner(user, pc);
  console.log(play);
  var playAgain = prompt(`tu = ${user}. pc = ${pc} . ${play}. Si quieres seguir jugando toca la letra "y". O cualquier otra letra para terminar.`);
 } while (playAgain == "y");
