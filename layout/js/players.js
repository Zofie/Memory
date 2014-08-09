Players = {
  elements: {
    addPlayer: $('.js-add-player'),
    scoreBoard: '<div>0 punten</div>',
    playNow: $('.play-now'),
    start: $('#js-startToPlay'),
  },

  init: function() {
    elements = this.elements;

    this.addPlayers();
    this.startToPlay();
    this.playerTurn();

  },

  addPlayers: function() {
    $('.player').submit(function(event) {
       event.preventDefault();

       playerName = $(this).find('.player-name-input').val();
       $(this).find('.player-name').empty().append(playerName);
       $(this).find('form').hide();

    });
  },

  startToPlay: function(){
    $(Memory.elements.board).hide();

    $('#js-startToPlay').click(function(){

      // $.when() kan je begruiken om iets toe te passen op meerdere items.
      $.when(
        // hide player name form en start button
        $('.js-add-player, .startToPlay').hide()
        // show board
        && $(Memory.elements.board).show()
        // Show score
        && $('.player').append(elements.scoreBoard)
        // show which players turn it is
        && $('#player1').addClass('highlighted-player')
        );
    })
  },

  playerTurn: function() {

  }
}

Players.init();
