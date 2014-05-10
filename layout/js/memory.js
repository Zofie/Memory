var s,
Memory = {

  settings: {
	maxPlayers: 4,
	addPlayer: $( ".js-player" ), // add player button 
	playerName: $('.player-name'), // name invidual player
	scoreBoard: "<div>scoreboard shizzle comes here</div>",
	playNow: $('.play-now'), // play now button
	playersList: [] // array with all names of players
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
			// Show "play now" button
			$("input").removeClass('is-hidden');
			break;

			case ListLength === s.maxPlayers:
			// Hide form to add players when max is reached
			s.addPlayer.hide();
			break;
		}
		s.playersList.push(s.playerName.val());

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