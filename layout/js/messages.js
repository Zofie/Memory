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

        Memory.clearClickedCards();

        Memory.emptyArray();

      }
    }, 1);
  }
}
