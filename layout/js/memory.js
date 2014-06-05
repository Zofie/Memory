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
		this.AddPlayers();
		this.createBoard();
		this.chooseTwoCards();
	},

	AddPlayers: function() {

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
		var cards = [];
		var diffCards = settings.cardsAmount / 2 + 1;

		// push to array
		for (var i = 1; i < diffCards ; i ++) {
			cards.push(i);
			cards.push(i);
		}

		function shuffle(o){
		    for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
		    return o;
		}

		cards = shuffle(cards);

		// loop over array
		jQuery.each( cards, function( card, id ) {
			$('#board').append('<div class="board__card"><img src="layout/img/'+id+'.jpg" class="is-hidden" id="'+id+'" /></div>');
		});
	},

	chooseTwoCards: function() {
		var numClicks = 1;
		var sameCards = [];
		var sameCardsID = [];
		$('#board .board__card img').click(function(){
			for (i = 1; i < 2; i++) {
				if (numClicks <= 2) {
					// ad class to clicked images
					$(this).addClass('clicked').removeClass('is-hidden');
					if (numClicks === 1 ) {
						sameCards.push($(this));
						sameCardsID.push($(this).attr('id'));
					} else if (numClicks === 2) {
						var card2 = $(this);
						sameCards.push($(this));
						sameCardsID.push($(this).attr('id'));
						if (sameCardsID[0] === sameCardsID[1]){
							$('#board .board__card img').removeClass('clicked');
							alert('same');
							numClicks = 0;
						} else {
						 	$('#board .board__card img').removeClass('clicked');
						 	alert('not the same');
						 	numClicks = 0;
						 	$(sameCards[0]).addClass('is-hidden');
						 	$(sameCards[1]).addClass('is-hidden');
						}
							sameCards.splice(0,2);
							sameCardsID.splice(0,2);
					}
				}
				numClicks +=1;
			}
		});
	}
};

//
// @todo check when card is already clicked
// @todo form validation
// @todo create cards
// @todo hide content cards
// @todo shuffle cards
// @todo is match when 2 clicked
// @todo flipoverAnimation

Memory.init();