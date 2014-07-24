Players = {
  elements: {
    addPlayer: $('.js-add-player'),
    scoreBoard: '<div>scoreboard shizzle comes here</div>',
    playNow: $('.play-now'),
    start: $('#js-startToPlay'),
  },

  init: function() {
    elements = this.elements;

    this.addPlayers();
    this.startToPlay();

  },

  addPlayers: function() {
    $('.player').submit(function(event) {
       event.preventDefault();

       playerName = $(this).find('.player-name-input').val();
       $(this).find('.player-name').empty().append(playerName);
       $(this).append('<p class="scoreboard">0 punten</p>');
       $(this).find('form').hide();

    });
  },

  startToPlay: function(){
    $(Memory.elements.board).hide();

    $('#js-startToPlay').click(function(){

      // $.when() kan je begruiken om iets toe te passen op meerdere items.
      $.when($('.js-add-player, .startToPlay').hide() && $(Memory.elements.board).show());
    })
  }
}

Players.init();
