var Memory =
{
	init: function()
	{
		Memory.AddPlayers();
		Memory.createRandomCards();
		Memory.shuffleCards();
		Memory.isMatch();
		Memory.flipoverAnimation();
	},

	AddPlayers: function()
	{
		$( ".js-player" ).submit(function(event) {

			// Check length of player list
			var playerList = $( ".players-list li" ).length;
			var scoreBoard = "<div>scoreboard shizzle comes here</div>";

			// Read value of entered name
			var player = $('.player-name').val();

			if ( playerList === 3 ) {
				// When playerList reached 4 players hide form
				$("ul").append("<li>" + player + scoreBoard+ "</li>");
				$('.js-player').hide();
			} else {
				$("ul").append("<li>" + player + scoreBoard+ "</li>");
			}
			event.preventDefault();
		});
	},

	createRandomCards: function()
	{

	},

	shuffleCards: function()
	{

	},

	isMatch: function()
	{

	},

	flipoverAnimation: function()
	{

	}
};

var Cards =
{

};

var Scoreboard =
{

};

Memory.init();