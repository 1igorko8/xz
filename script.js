// JavaScript код для зміни місцезнаходження "Ні" при наведенні мишкою
function changePosition() {
   var noButton = document.getElementById('no');
   noButton.style.top = Math.floor(Math.random() * 90) + '%';
   noButton.style.left = Math.floor(Math.random() * 90) + '%';
}

// JavaScript код для відображення відповіді "Так" або "Ні"
function showAnswer(answer) {
   alert(answer + ' я люблю тебе також');
}