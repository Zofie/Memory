Memory.Messages = {

  messageWrongAfterTurn: function(message){
    var counter = 150;

    // Add message that player chose wrong cards
    $('.message-text').append(message);

    var interval = setInterval(function() {
      counter--;

      // change progress bar from 100% to 0
      $('progress').val(counter);

      if (counter == 0){

        // Hide overlay message when counter is 0
        $('.overlay').hide();

        // Remove message after turn
        $('.message-text').empty();

        // Clear progress bar -> back to 100%
        clearInterval(interval);

        Memory.clearClickedCards();
        Memory.hideWronglyClickedCards();

        Memory.emptyArray();
      }
    }, 1);
  },

  messageAfterTurn: function(message){
    var counter = 150;

    // Add message that player chose wrong cards
    $('.message-text').append(message);

    var interval = setInterval(function() {
      counter--;

      // change progress bar from 100% to 0
      $('progress').val(counter);

      if (counter == 0){

        // Hide overlay message when counter is 0
        $('.overlay').hide();

        // Remove message after turn
        $('.message-text').empty();

        // Clear progress bar -> back to 100%
        clearInterval(interval);

        Memory.disableClickedCards();

        if (($('#board .already-clicked').length ) === settings.cardsAmount ) {
         var player1score = parseInt($('#player1 .js-score').text());
         var player1name = $('#player1 .player-name').text()
         var player2name = $('#player2 .player-name').text()
         var player2score = parseInt($('#player2 .js-score').text());
          if ( player1score > player2score) {
            $('.the-end').removeClass('display-none');
            $('.end-message').append(player1name + ' heeft gewonnen');
          } else if ( player1score < player2score) {
            $('.the-end').removeClass('display-none');
            $('.end-message').append(player2name + ' heeft gewonnen');
          } else {
            $('.the-end').removeClass('display-none');
            $('.end-message').append('Gelijkspel');
          }
        }

        Memory.emptyArray();

      }
    }, 1);
  }
}
