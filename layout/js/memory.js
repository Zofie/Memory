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
		if ($( ".players-list li").length === 4) {
			s.addPlayer.hide();
		};
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