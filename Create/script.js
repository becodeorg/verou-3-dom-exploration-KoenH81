var randomColor = Math.floor(Math.random() * 16777215).toString(16);
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
    //console.log(element);
    var newSec = document.createElement('section');
    newSec.style.backgroundColor = '#' + randomColor;
    //console.log(newSec);
    var newContent = document.createTextNode(element);
    //console.log(newContent);
    newSec.appendChild(newContent);
    document.body.appendChild(newSec);
    console.log(newSec);
    //document.write(newSec);

}