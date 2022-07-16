var audio = new Audio('audio/music.mp3');

document.addEventListener('DOMContentLoaded', function () {
  document
    .getElementsByClassName('open')[0]
    .addEventListener('click', function () {
      document
        .getElementsByClassName('card-packaging')[0]
        .classList.add('is-open');
      audio.play();
    });

  document
    .getElementsByClassName('close')[0]
    .addEventListener('click', function () {
      document
        .getElementsByClassName('card-packaging')[0]
        .classList.remove('is-open');
    });
});
