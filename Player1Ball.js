class Player1Ball{
    constructor(x, y, radius){
        /*
        var options = {
            isStatic : false,
            restitution : 0.6,
            friction : 1.2,
            density : 1
            
        }
        */

        this.body = createSprite(x, y, radius, radius);
        this.body.scale = 0.3;

         //       Matter.body.setAngle( this.body, angle);
       //   World.add(world,this.body);
        this.width = radius;
        this.height = radius;

      //  this.image = loadImage("spr_redBall2.png");

      


/*
        if(
           this.body.isTouching(this.body)||
           this.body.isTouching(Player2Ball)||
           this.body.isTouching(mainBall.body)||
           this.body.isTouching(LastBall)){

            ballToBallSound.play();
            this.body.destroy();
            p1score = p1score + 1
        }
  */  

    }

}