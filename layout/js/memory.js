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
		card: '<div class=\'grid-2\'></div>'
	},

	// @todo push players to object
	players: new Object(),

	cards: new Object(),

	init: function() {
		settings = this.settings;
		elements = this.elements;
		this.AddPlayers();
		this.createBoard();
	},

	AddPlayers: function() {
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
		var numVariations = settings.cardsAmount / 2;

		for ( var i = 1; i <= numVariations; i++){
			var cardOne = $(elements.card);
			cardOne.append('<img src="layout/img/'+ i +'.jpg" alt="">');

			var cardTwo = $(elements.card);
			cardTwo.append('<img src="layout/img/'+ i +'.jpg" alt="">');


			elements.board.append(cardOne);
			elements.board.append(cardTwo);

			Memory.cards[i] = cardOne;
			Memory.cards[i] = cardTwo;
		}

	}
};

// @todo form validation
// @todo create cards
// @todo hide content cards
// @todo shuffle cards
// @todo is match when 2 clicked
// @todo flipoverAnimation

Memory.init();