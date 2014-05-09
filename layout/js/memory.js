var s,
Memory = {

  settings: {
	maxPlayers: 4,
	addPlayer: $( ".js-player" ),
	playerName: $('.player-name'),
	scoreBoard: "<div>scoreboard shizzle comes here</div>",
	playNow: $('.play-now'),
  },

  init: function() {
	s = this.settings;
	this.AddPlayers();
  },

  AddPlayers: function() {
	s.addPlayer.submit(function(event) {
		$("ul").append("<li>" + s.playerName.val() + s.scoreBoard+ "</li>");

		var ListLength =  $( ".players-list li").length;
		switch(true) {
			case ListLength === 2:
			$("input").removeClass('is-hidden');
			break;

			case ListLength === 4:
			s.addPlayer.hide();
			break;
		}
		event.preventDefault();
	});
},

// @todo create cards
// @todo hide content cards
// @todo shuffle cards
// @todo is match when 2 clicked
// @todo flipoverAnimation
};

Memory.init();