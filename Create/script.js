
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
for (const element of nameList) {
    var randomColor = Math.floor(Math.random() * 16777215).toString(16);
    var newSec = document.createElement('section');
    newSec.style.backgroundColor = "#" + randomColor;
    var newContent = document.createTextNode(element);
    newSec.appendChild(newContent);
    document.querySelector('article').appendChild(newSec);
}
document.write(document.querySelector('article'));
console.log(newSec);
