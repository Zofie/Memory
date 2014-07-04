Memory = {

  settings: {
    maxPlayers: 4,
    cardsAmount: 16
  },

  elements: {
    addPlayer: $('.js-add-player'),
    board: $('#board'),
    playerName: $('.player-name'),
    scoreBoard: '<div>scoreboard shizzle comes here</div>',
    playNow: $('.play-now'),
    card: '<div class=\'board__card\'></div>'
  },

  init: function() {

    settings = this.settings;
    elements = this.elements;

    this.addPlayers();
    this.createBoard();
    this.chooseTwoCards();
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

  // we wan't our cards in a random order so we'll shuffle them
  shuffleCards: function(o){
    for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
      return o;
  },

  createBoard: function() {

    $('.overlay').hide();
    // this is the array that will hold all the cards
    var cards = [];
    // we need diffCards so we know how many variations we have (2 same cards is one variation)
    var diffCards = settings.cardsAmount / 2 + 1;

    // fill up the cards array with the id's
    for (var i = 1; i < diffCards ; i ++) {
      cards.push(i);
      cards.push(i);
    }

    cards = this.shuffleCards(cards);

    // loop over array
    // @todo: probeer geen html in de javascript te steken, maar dit in html steken en deze dan telkens clonen
    // add for each card a new element in the html
    jQuery.each( cards, function( card, id ) {
      $('#board').append('<div class="board__card"><img src="layout/img/'+id+'.jpg" draggable="false" class="is-hidden" id="'+id+'" /></div>');
    });
  },

  chooseTwoCards: function() {
    var numClicks = 1;
    var sameCards = [];
    var sameCardsID = [];

    function emptyArray(){
        // empty array with chosen images html
        sameCards = [];
        // empty array with chosen images id
        sameCardsID = [];
      };

      function clearClickedCards(){
        // remove the clicked class to reset this turn
        $('img').removeClass('clicked');
      }

      function hideWronglyClickedCards(){
        // Hidde wrongly chosen images again because they were not equal
        $(sameCards[0]).addClass('is-hidden');
        $(sameCards[1]).addClass('is-hidden');
      }

      function messageAfterTurn(message){
        $('.message-box').append(message);
        setTimeout(function() {
          $('.message-box').empty();

          clearClickedCards();
          emptyArray();
        }, 1000);
      }

      $('img').click(function(){
      // first check if card is already clicked or not
      // If so show message that player needs to choose an other card
      // If not continue playing
      if ($(this).hasClass('clicked')) {
          //
        } else {
        // if (numClicks <= 2) {
        // ad class "clicked" to chosen image.
        $(this).toggleClass('clicked').toggleClass('is-hidden');
        if (numClicks === 1 ) {
          // Push the html of the chosen img to the array sameCards
          sameCards.push($(this));
          // Push the id of the chosen image to the array sameCardsID
          sameCardsID.push($(this).attr('id'));
        } else if (numClicks === 2) {
          // push the second chosen img html to the array sameCards
          sameCards.push($(this));
          // @todo: deze tweede array lijkt mij niet echt nodig aangezien je deze
          // info al hebt in je eerste array
          // probeer eens sameCards[0].attr('id')
          // push the second chosen img id to the array sameCardsID
          sameCardsID.push($(this).attr('id'));

          if (sameCardsID[0] === sameCardsID[1]){
            $('.overlay').show();
            messageAfterTurn('You\'ve chosen the same cards');
            // remove the clicked class to reset this turn

            // reset number of clicks
            numClicks = 0;
          } else {
            $('.overlay').show();
            Memory.Messages.messageWrongAfterTurn('Too bad');
            // reset number of clicks
            numClicks = 0;
          };
        }
      // }
      // Count clicks
      numClicks++;
    }
  });
}
}

Memory.Messages = {

  messageWrongAfterTurn: function(message){
    $('.message-box').append(message);

    Memory.Messages.countdownBar();

    setTimeout(function() {
      $('.message-box').empty();
      $('.overlay').hide();
      Memory.clearClickedCards();
      Memory.hideWronglyClickedCards();
      Memory.emptyArray();
    }, 3000);
  },

  countdownBar: function() {
    var counter = 700;
    var interval = setInterval(function() {
      counter--;
      console.log(counter);
      $('progress').val(counter);

      if (counter == 0) {
        // Display a login box
        $('.overlay').hide();
        clearInterval(interval);
      }
    }, 1);
  }
}

// @todo form validation
// @todo flipoverAnimation
// @todo progress bar counting down for next turn
// @todo timeout instead of alert message (less clicks)
// @todo Global functions
// @todo layout

Memory.init();



// todo: progress en overlay: communiceren
// todo: methods los koppelen (op zelfde niveau + groeperen)
// todo: opkuisen
// example: frontend.js fork (zonder this)
// wat moet een message doen: tonen en sluiten