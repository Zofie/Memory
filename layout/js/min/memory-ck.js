Memory={settings:{maxPlayers:4,cardsAmount:24},elements:{addPlayer:$(".js-add-player"),board:$("#board"),playerName:$(".player-name"),scoreBoard:"<div>scoreboard shizzle comes here</div>",playNow:$(".play-now"),card:"<div class='board__card'></div>"},players:new Object,cards:new Object,init:function(){settings=this.settings,elements=this.elements,this.AddPlayers(),this.createBoard(),this.chooseTwoCards(),this.shuffleCards()},AddPlayers:function(){elements.addPlayer.submit(function(e){e.preventDefault(),$("ul").append("<li>"+elements.playerName.val()+elements.scoreBoard+"</li>");var a=$(".players-list li").length;switch(!0){case 2===a:$("input").removeClass("is-hidden");break;case a===settings.maxPlayers:elements.addPlayer.hide()}})},createBoard:function(){function e(e){for(var a,s,r=e.length;r;a=Math.floor(Math.random()*r),s=e[--r],e[r]=e[a],e[a]=s);return e}for(var a=[],s=settings.cardsAmount/2+1,r=1;s>r;r++)a.push(r),a.push(r);a=e(a),jQuery.each(a,function(e,a){$("#board").append('<div class="board__card"><img src="layout/img/'+a+'.jpg" id="'+a+'" /></div>')})},chooseTwoCards:function(){var e=0;$("#board .board__card img").click(function(){for(i=1;2>i;i++)clicked=$(this).attr("id"),console.log(clicked);e+=1})}},Memory.init();