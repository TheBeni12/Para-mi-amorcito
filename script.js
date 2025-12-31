$(document).ready(function(){

  $('.valentines-day').click(function(){

    // Animación del sobre
    $('.envelope').css({
      'animation':'fall 3s linear 1',
      '-webkit-animation':'fall 3s linear 1'
    });

    // Reproducir música
    let music = document.getElementById('music');
    music.play();

    $('.envelope').fadeOut(800, function() {

      $('.valentines-day .heart, .valentines-day .text, .valentines-day .front').hide();

      $('#card').css({
        'visibility':'visible',
        'opacity': 0,
        'transform': 'scale(0.1)'
      });

      $('#card').animate({'opacity': 1}, {
        duration: 1000,
        step: function(now) {
          var scale = 1 + Math.sin(now * Math.PI) * 0.1;
          $(this).css('transform', 'scale(' + scale + ')');
        }
      });
    });
  });

});
