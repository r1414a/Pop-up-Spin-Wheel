let container = document.querySelector(".container");
let btn = document.getElementById("spin");
let teer = document.querySelector('.arrow');
let msg = document.getElementById('one');
let number = Math.ceil(Math.random() * 6000);

btn.onclick = function() {
    container.style.transform = "rotate(" + number + "deg)";
    number += Math.ceil(Math.random() * 6000);
}