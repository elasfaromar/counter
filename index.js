document.getElementById("decrease").onclick = function() {
    let current = Number(document.getElementById("counter").innerHTML);
    document.getElementById("counter").innerHTML = "" + (current - 1);
}

document.getElementById("reset").onclick = function() {
    document.getElementById("counter").innerHTML = "0";
}

document.getElementById("increase").onclick = function() {
    let current = Number(document.getElementById("counter").innerHTML);
    document.getElementById("counter").innerHTML = "" + (current + 1);
}