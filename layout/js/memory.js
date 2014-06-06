Memory = {

	settings: {
		maxPlayers: 4,
		cardsAmount: 24
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

		// function Player() {
		// 	this.name;
		// }

		// var p1 = new Player();

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

	createBoard: function() {
		// this is the array that will hold all the cards
		var cards = [];
		// we need diffCards so we know how many variations we have (2 same cards is one variation)
		var diffCards = settings.cardsAmount / 2 + 1;

		// fill up the cards array with the id's
		for (var i = 1; i < diffCards ; i ++) {
			cards.push(i);
			cards.push(i);
		}

		// 		var arr = [1,2,3,4,5,6];
		// arr.sort(function() {
		//    return Math.random() - 0.5;
		// });
		// @todo: beter niet functions in functions steken maar alles op zelfde niveau. Je kan ook een apart js hebben met daarin
		// allemaal algemene functies
		function shuffle(o){
		    for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
		    return o;
		}

		// we wan't our cards in a random order so we'll shuffle them
		cards = shuffle(cards);

		// loop over array
		// @todo: probeer geen html in de javascript te steken, maar dit in html steken en deze dan telkens clonen
		// add for each card a new element in the html
		jQuery.each( cards, function( card, id ) {
			$('#board').append('<div class="board__card"><img src="layout/img/'+id+'.jpg" draggable="false" class="is-hidden" id="'+id+'" /></div>');
		});
	},

	chooseTwoCards: function(a, b, c) {
		var numClicks = 1;
		var sameCards = [];
		var sameCardsID = [];

		$('#board .board__card img').click(function(){
			// if (numClicks <= 2) {
				// ad class "clicked" to chosen image.
				$(this).addClass('clicked').removeClass('is-hidden');
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
						alert('You\'ve chosen the same cards');
						// remove the clicked class to reset this turn
						$('#board .board__card img').removeClass('clicked');
						// reset number of clicks
						numClicks = 0;
					} else {
					 	alert('Too bad!');
					 	// remove the clicked class to reset this turn
					 	$('#board .board__card img').removeClass('clicked');

					 	// reset number of clicks
					 	numClicks = 0;

					 	// Hidde wrongly chosen images again because they were not equal
					 	$(sameCards[0]).addClass('is-hidden');
					 	$(sameCards[1]).addClass('is-hidden');
					}

					// empty array with chosen images html
					// @todo: je kan dit her-initialiseren door sameCards =[]
					sameCards.splice(0,2);
					// empty array with chosen images id
					sameCardsID.splice(0,2);
				}
			// }

			// Count clicks
			numClicks++;
		});
	}
};

// @todo: geen twee keer op zelfde kaart klikken
// @todo: bij dragable kan je de kaart zien.


// @todo: commentaar in je code verwerken (engels), bij programmeren is dit héél belangrijk :-)
// @todo check when card is already clicked
// @todo form validation
// @todo create cards
// @todo hide content cards
// @todo shuffle cards
// @todo is match when 2 clicked
// @todo flipoverAnimation

Memory.init();