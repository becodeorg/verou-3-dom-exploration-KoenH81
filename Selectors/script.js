const important = document.querySelectorAll(".important");
console.log(important);
important.title = "This is an important item";
console.log(important);

console.log("Select all the img tags and loop through them.")
const img = document.querySelectorAll("img");
console.log(img);

for (let i = 0; i < img.length; i++) {
    const currentImage = img[i];
    console.log(currentImage);
    if (currentImage.className != "important")
        currentImage.style.display = "none";
}
console.log("paragraph stuff");
const par = document.querySelectorAll("p");
for (let i = 0; i < par.length; i++) {
    const currentP = par[i];
    console.log(currentP);
    if (currentP.className)
        console.log(currentP.className);
    else
        var randomColor = Math.floor(Math.random() * 16777215).toString(16);
    currentP.style.color = "#" + randomColor;
}
