Players = {
  elements: {
    addPlayer: $('.js-add-player'),
    playerName: $('.player-name'),
    scoreBoard: '<div>scoreboard shizzle comes here</div>',
    playNow: $('.play-now'),
  },

  init: function() {

    elements = this.elements;

    this.addPlayers();

  },

  addPlayers: function() {

    elements.addPlayer.submit(function(event) {
      event.preventDefault();
      $('ul').append('<li>' + elements.playerName.val() + elements.scoreBoard+ '</li>');

      var listLength =  $( '.players-list li').length;
      switch(true) {
        case listLength === 2:
        $('input').removeClass('is-hidden');
        break;

        case listLength === settings.maxPlayers:
        elements.addPlayer.hide();
        break;
      }
    });
  },
};