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
function footballPoints(totWins, totTies) {
  return (totWins * 3) + (totTies * 1);
}

// Desafio 6
function highestCount(listNumbers = []) {
  let highestNumber = listNumbers[0];
  let cont = 0;
  for (let control in listNumbers) {
    if (listNumbers[control] > highestNumber) {
      highestNumber = listNumbers[control];
    }
  }
  for (let control in listNumbers) {
    if (listNumbers[control] === highestNumber) {
      cont = cont + 1;
    }
  }
  return cont;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let dist1 = Math.abs(mouse - cat1);
  let dist2 = Math.abs(mouse - cat2);
  let menssagem = '';
  if (dist1 === dist2) {
    menssagem = 'os gatos trombam e o rato foge';
  }else if(dist1 < dist2){
    menssagem = 'cat1';
  }else menssagem = 'cat2';
  return menssagem;
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
