describe("Clase FireBallSpec", function(){
	var canvas, ctx;

  beforeEach(function(){
		loadFixtures('index.html');
		canvas = $('#game')[0];
		expect(canvas).toExist();
		ctx = canvas.getContext('2d');
		expect(ctx).toBeDefined();
		oldGame = Game;
		SpriteSheet.load (sprites,function(){});
  });

  afterEach(function(){
  	Game = oldGame;
  });
	
	//Test step
	it("step", function(){ 
		var fireball = new FireBall(100,50,1);
		fireball.board = new GameBoard();
		fireball.board.resetRemoved();
		fireball.step (1);
		expect (fireball.vx).toBe (100 * 1);
		expect (fireball.vy).toBe (-1050 + 50 * 1);
	});
	
	//Test draw	
	it("draw", function(){
  	spyOn(SpriteSheet, "draw");
		var fireball = new FireBall(100,50,1);
		fireball.draw(ctx);
		expect(SpriteSheet.draw).toHaveBeenCalled();
	 	expect(SpriteSheet.draw.calls[0].args[1]).toEqual("fire_ball");
	 	expect(SpriteSheet.draw.calls[0].args[2]).toEqual(fireball.x);
	 	expect(SpriteSheet.draw.calls[0].args[3]).toEqual(fireball.y);
  });
	
});

