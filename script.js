//Quando abrir o site colocar o volume a 15%
document.addEventListener('DOMContentLoaded', function () {
  var audio = document.getElementById('audio')
audio.volume = 0.15;
});

$('input').on('change', function() {
    $('body').toggleClass('blue');
  });



