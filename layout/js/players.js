Players = {
  elements: {
    addPlayer: $('.js-add-player'),
    scoreBoard: '<div>scoreboard shizzle comes here</div>',
    playNow: $('.play-now'),
  },

  init: function() {
    elements = this.elements;

    this.addPlayers();

  },

  players: function() {

  },

  addPlayers: function() {
    $('.player').submit(function(event) {
       event.preventDefault();

       playerName = $(this).find('.player-name-input').val();
       $(this).find('.player-name').empty().append(playerName);
       $(this).append('<p class="scoreboard">0 punten</p>')
       $(this).find('form').hide()

    });
  },

  startPlaying: function() {

  }

}

Players.init();
