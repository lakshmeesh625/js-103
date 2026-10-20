let add = document.getElementById("add");
let reset = document.getElementById("reset");
let subtract = document.getElementById("subtract");
let label = document.getElementById("label");
let count = 0;


add.onclick = function() {
    count++;
    label.textContent = count;
}
reset.onclick = function() {
    count = 0;
    label.textContent = count;
}
subtract.onclick = function() {
    count--;
    label.textContent = count;
}



