class Paper{

    constructor(x,y,r){

        var options={

            isStatic:false,
            restitution:0.5,
            density :1,
            friction :0.7

        }

        this.body = Bodies.circle(x,y,r,options);

        World.add(world,this.body);
        this.r= r;
        this.x = x;
        this.y = y;
       

    }


    display(){

        var pos = this.body.position;
        
        fill("blue")
        ellipseMode(RADIUS);
        ellipse(pos.x,pos.y,this.r,this.r)

    }

}