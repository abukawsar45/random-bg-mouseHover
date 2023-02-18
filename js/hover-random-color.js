document.getElementById('random-card').addEventListener('mouseover', function(){
    randomColor("random-card")
// random color common function
})

function randomColor(inputId) {
    var symbols, color;
    symbols = '0123456789ABCDEF';

    color = '#';
    for (var i = 0; i < 6; i++) {
        color = color + symbols[Math.floor(Math.random() * 16)];
    }
    document.getElementById(inputId).style.background = color;
}