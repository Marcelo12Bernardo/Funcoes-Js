// Desafio 1
function compareTrue(paramA,paramB) {
  if(paramA === true && paramB === true){
    return true;
  } 
    return false;
}

// Desafio 2
function calcArea(vBase,vAltura) {
  return ( vBase * vAltura ) /2;
}

// Desafio 3
function splitSentence(setence) {
  return setence.split(" ");
}

// Desafio 4
function concatName(listName = []) {
  return listName[listName.length - 1] + ", " + listName[0];
}

// Desafio 5
function footballPoints() {
  // seu código aqui
}

// Desafio 6
function highestCount() {
  // seu código aqui
}

// Desafio 7
function catAndMouse() {
  // seu código aqui
}

// Desafio 8
function fizzBuzz() {
  // seu código aqui
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
}

// Desafio 10
function techList() {
  // seu código aqui
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
  techList,
};
