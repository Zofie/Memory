var Memory =
{
	init: function()
	{
		Memory.addTwoPlayers();
		Memory.createRandomCards();
		Memory.shuffleCards();
		Memory.isMatch();
		Memory.flipoverAnimation();
	},

	addTwoPlayers: function()
	{
		$('#play1').click(function(event) {
			var player1 = $('#player1').val();
			$( "h3#js-name1" ).text(player1);

			// Hide form after name was submitted
			$(this).parent().hide();
			event.preventDefault();
		});

		$('#play2').click(function(event) {
			var player2 = $('#player2').val();
			$( "h3#js-name2" ).text(player2);

			// Hide form after name was submitted
			$(this).parent().hide();
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

Memory.init();