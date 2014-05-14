Memory = {

  settings: {
	maxPlayers: 4
  },

  elements: {
	addPlayer: $( ".js-add-player" ),
	playerName: $('.player-name'),
	scoreBoard: "<div>scoreboard shizzle comes here</div>",
	playNow: $('.play-now')
  },

  init: function() {
	settings = this.settings;
	elements = this.elements;
	this.AddPlayers();
  },

  AddPlayers: function() {
	elements.addPlayer.submit(function(event) {
		event.preventDefault();
		$("ul").append("<li>" + elements.playerName.val() + elements.scoreBoard+ "</li>");

		var listLength =  $( ".players-list li").length;
		switch(true) {
			case listLength === 2:
			$("input").removeClass('is-hidden');
			break;

			case listLength === settings.maxPlayers:
			elements.addPlayer.hide();
			break;
		}
	});
},

// @todo create cards
// @todo hide content cards
// @todo shuffle cards
// @todo is match when 2 clicked
// @todo flipoverAnimation
};

Memory.init();