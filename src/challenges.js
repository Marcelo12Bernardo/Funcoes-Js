// Desafio 1
function compareTrue(paramA,paramB) {
  if (paramA === true && paramB === true) {
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
function fizzBuzz(listNumbers = []) {
  let litsResuls = [];
  for (let control in listNumbers) {
    if ((listNumbers[control] % 3) === 0 && (listNumbers[control] % 5) === 0) {
      litsResuls.push('fizzBuzz');
    }else if ((listNumbers[control] % 3) !== 0 && (listNumbers[control] % 5) != 0) {
      litsResuls.push('bug!');
    }else if((listNumbers[control] % 3) === 0) {
      litsResuls.push('fizz');
    }else litsResuls.push('buzz');
  }
  return litsResuls;
}

// Desafio 9
function encode(codify){
  for (let ctr = 0; ctr < codify.length; ctr + 1) {
    codify = codify.replace('a','1');
    codify = codify.replace('e','2');
    codify = codify.replace('i','3');
    codify = codify.replace('o','4');
    codify = codify.replace('u','5');
  }
  return codify;
}

function decode(codify) {
  for (let ctr = 0; ctr < codify.length; ctr + 1) {
    codify = codify.replace('1','a');
    codify = codify.replace('2','e');
    codify = codify.replace('3','i');
    codify = codify.replace('4','o');
    codify = codify.replace('5','u');
  }
  return codify;
}

// Desafio 10
function techList(nameTech, nampePerson) {
  let objList = [];

  if (nameTech.length !== 0 && nampePerson !== ''){
    nameTech.sort();
    objList = [];
    for (const value of nameTech) {
      objList.push({ tech: value, name: nampePerson });
    }
    return objList;
  }
  return 'Vazio!';
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
