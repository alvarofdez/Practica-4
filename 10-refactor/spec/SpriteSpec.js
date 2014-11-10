describe("Clase SpriteSpec", function(){
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
	
	//Test setup
	it("setup", function(){
		var s = new Sprite ();
		spyOn(s, "merge");
		s.setup('missile',{ vy: -700 }); 		
		expect(s.merge).toHaveBeenCalled();
		expect(s.sprite).toBe('missile');
		expect(s.frame).toBe(0);
	});

	//Test merge
	it("merge", function(){ 
		var s = new Sprite ();
		spyOn(s, "merge").andCallThrough();
		s.setup('missile',{ vy: -700 }); 
		expect(s.merge).toHaveBeenCalledWith({ vy: -700 });
		expect(s.vy).toBe(-700);
	});

	//Test draw	
	it("draw", function(){
		spyOn(SpriteSheet, "draw");
		var s = new Sprite ();
		s.draw(ctx);
		expect(SpriteSheet.draw).toHaveBeenCalled();
  });
	
});

