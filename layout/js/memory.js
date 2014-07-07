Memory = {

  settings: {
    cardsAmount: 4,
    maxPlayers: 4
  },

  elements: {
    board: $('#board'),
    card: '<div class=\'board__card\'></div>',
    sameCards: [],
    sameCardsID: [],
    cardsOver: $('#board img.is-hidden').length
  },

  init: function() {

    settings = this.settings;
    elements = this.elements;

    this.createBoard();
    this.chooseTwoCards();
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


  clearClickedCards: function(){
    // remove the clicked class to reset this turn
    $('img').removeClass('clicked');
  },

  hideWronglyClickedCards: function (){
    // Hidde wrongly chosen images again because they were not equal
    $(elements.sameCards[0]).addClass('is-hidden');
    $(elements.sameCards[1]).addClass('is-hidden');
  },

  emptyArray: function(){
    // empty array with chosen images html
    elements.sameCards = [];
    // empty array with chosen images id
    elements.sameCardsID = [];
  },



  chooseTwoCards: function() {
    var numClicks = 1;
    var cardsOver = 0;

    $('img').click(function(){

      // first check if card is already clicked or not
      // If so show message that player needs to choose an other card
      // If not continue playing
      if ($(this).hasClass('clicked')) {
          // Do nothing
      } else {

        $(this).toggleClass('clicked').toggleClass('is-hidden');
      
        // if (numClicks <= 2) {
        
        if (numClicks === 1 ) {

          // Push the html of the chosen img to the array sameCards
          elements.sameCards.push($(this));
          // Push the id of the chosen image to the array sameCardsID
          elements.sameCardsID.push($(this).attr('id'));

        } else if (numClicks === 2) {
            // push the second chosen img html to the array sameCards
            elements.sameCards.push($(this));
            // @todo: deze tweede array lijkt mij niet echt nodig aangezien je deze
            // info al hebt in je eerste array
            // probeer eens sameCards[0].attr('id')
            // push the second chosen img id to the array sameCardsID
            elements.sameCardsID.push($(this).attr('id'));
            // console.log(elements.sameCardsID);

            if (elements.sameCardsID[0] === elements.sameCardsID[1]){
                $('.overlay').show();
                Memory.Messages.messageAfterTurn('You\'ve chosen the same cards');
                
                // reset number of clicks
                numClicks = 0;
            } else {
      
              $('.overlay').show();
              Memory.Messages.messageWrongAfterTurn('Too bad');
              // reset number of clicks
              numClicks = 0;
            }
          }
         }
        // }
        // Count clicks
        numClicks++;
      });
  }
}
