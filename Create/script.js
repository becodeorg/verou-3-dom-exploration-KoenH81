const nameList = [
    "Ahmad",
    "Jian",
    "Michael",
    "Dante",
    "Muhammet",
    "Nicolas",
    "Jordy",
    "Beryl",
    "Cynthia",
    "Ruben",
    "Magali",
    "Jawid",
    "Koen",
    "Kevin",
    "Benjamin",
    "Dery",
    "Michelle",
    "Colin",
    "Feruz",
    "Pieter",
    "Ellen",
    "Sara"]

function shuffleArray(nameList) {
    for (var i = nameList.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = nameList[i];
        nameList[i] = nameList[j];
        nameList[j] = temp;
    }
}
shuffleArray(nameList);
console.log(nameList);

for (const element of nameList) {
    var randomColor = Math.floor(Math.random() * 16777215).toString(16);
    var newSec = document.createElement('section');
    newSec.style.backgroundColor = "#" + randomColor;
    var newContent = document.createTextNode(element);
    newSec.appendChild(newContent);
    document.querySelector('article').appendChild(newSec);
}


