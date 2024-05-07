document.addEventListener("DOMContentLoaded", function() {
    var scoreElement = document.getElementById("score");
    var score = 0;

    setInterval(function() {
        score++;
        scoreElement.textContent = score;
    }, 1000);
});
