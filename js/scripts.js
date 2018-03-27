// scripts.js 

function pole() {
    var a = document.getElementById("a").value;
    var b = document.getElementById("b").value;
    var x = 0;
    var wzor = (a * a) - (x * a * b) - (b * b);

    var napis = document.getElementById("wynik").innerHTML = wzor;

    if (wzor > 0) {
        alert('Wynik dodatni');
    } else if (wzor < 0) {
        alert('Wynik ujemny');
    }
    if (wzor == 0) {
        alert('wynik rowna sie zero');
    }

}