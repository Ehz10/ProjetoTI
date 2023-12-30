//Quando abrir o site colocar o volume a 15%
    document.addEventListener('DOMContentLoaded', function () {
        var audio = document.getElementById('audio')
    audio.volume = 0.10;
    });

/*Mover os cards do carroussel*/
    //Definir os cards
    const cards = document.querySelectorAll('.card');
    //Definir os pointers
    const pointers = document.querySelectorAll('.pointer');
    

    
  
    function showCard(index) {
      cards.forEach(card => card.classList.remove('show'));
      cards[index].classList.add('show');
    }
  
    function setActivePointer(index) {
      pointers.forEach(pointer => pointer.classList.remove('active'));
      pointers[index].classList.add('active');
    }
  
    document.getElementById('prevBtn').addEventListener('click', function () {
      const currentIndex = Array.from(cards).findIndex(card => card.classList.contains('show'));
      const newIndex = (currentIndex - 1 + cards.length) % cards.length;
      showCard(newIndex);
      setActivePointer(newIndex);
    });
  
    document.getElementById('nextBtn').addEventListener('click', function () {
      const currentIndex = Array.from(cards).findIndex(card => card.classList.contains('show'));
      const newIndex = (currentIndex + 1) % cards.length;
      showCard(newIndex);
      setActivePointer(newIndex);
    });