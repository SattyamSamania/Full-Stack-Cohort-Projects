console.log("Hello World");

let count = 0;
document.getElementById("increase").onclick = function () {
    count += 1;
    document.getElementById("count").innerHTML = count;
}
document.getElementById("decrease").onclick = function () {
    count -= 1;
    document.getElementById("count").innerHTML = count;
}
document.getElementById("reset").onclick = function () {
    count = 0;
    document.getElementById("count").innerHTML = count;
}