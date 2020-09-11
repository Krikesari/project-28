class Girl {
    constructor(x,y,width,height) {
      var options = {
          isStatic: true
          
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      this.image= loadImage("Plucking mangoes/boy.png");
      World.add(world , this.body);
    }
    display(){
      var position =this.body.position;
      rectMode(CENTER);
      fill("yellow");
      //rect(position.x, position.y, this.width, this.height);
      image(this.image, 0, 0, this.width, this.height);
    }
  };