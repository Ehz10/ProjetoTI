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
    
    /*Altera o estilo de cada card dependendo do está a ser mostrado*/
    function showCard(index) {
      cards.forEach(card => card.classList.remove('show'));
      cards[index].classList.add('show');
    }
    /*Altera o estilo de cada pointer dependendo do está a ser mostrado*/
    function setActivePointer(index) {
      pointers.forEach(pointer => pointer.classList.remove('active'));
      pointers[index].classList.add('active');
    }
    
    /*
    Definido o que o butao "prevBtn" faz, atrasa um div na contagem e chama as funcoes "showcard" e "setActivePointer" para indicar o index respetivo e aplicar o respetivo estilo
    */
    document.getElementById('prevBtn').addEventListener('click', function () {
      const currentIndex = Array.from(cards).findIndex(card => card.classList.contains('show'));
      const newIndex = (currentIndex - 1 + cards.length) % cards.length;
      showCard(newIndex);
      setActivePointer(newIndex);
    });
    /*
    Definido o que o butao "nextBtn" faz, avança um div na contagem e chama as funcoes "showcard" e "setActivePointer" para indicar o index respetivo e aplicar o respetivo estilo
    */
    document.getElementById('nextBtn').addEventListener('click', function () {
      const currentIndex = Array.from(cards).findIndex(card => card.classList.contains('show'));
      const newIndex = (currentIndex + 1) % cards.length;
      showCard(newIndex);
      setActivePointer(newIndex);
    });