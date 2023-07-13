var pc;
var user;

function getUserChoice(){
  return (prompt(`Escribe tu eleccion de jugar: Piedra, papel, o tijera. ->`));
}

function getPCChoice(){
  var number = Math.floor(Math.random()* 3 - 1 + 1);
  switch(number){
    case 0: return "piedra"; break;
    case 1: return "papel"; break;
    case 2: return "tijera"; break;
  }
}

function winner(user, pc){
  switch(user){
    case "papel": 
      switch (pc) {
        case "papel": return "empate"; break;
        case "piedra": return "ganaste"; break;
        case "tijera": return "perdiste"; break;
      }
      case "piedra": 
      switch (pc) {
        case "papel": return "perdiste"; break;
        case "piedra": return "empate"; break;
        case "tijera": return "ganaste"; break;
      }
      case "tijera": 
      switch (pc) {
        case "papel": return "ganaste"; break;
        case "piedra": return "perdiste"; break;
        case "tijera": return "empate"; break;
      }
  }
}

do {
  user = getUserChoice();
  pc = getPCChoice();
  var play = winner(user, pc);
  console.log(play);
  var playAgain = prompt(`tu = ${user}. pc = ${pc} . ${play}. Si quieres seguir jugando toca la letra "y". O cualquier otra letra para terminar.`);
 } while (playAgain == "y");
