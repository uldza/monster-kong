/*
 * Barrels
 */


class Barrels extends Phaser.Group {
    constructor(game, frequency, speed, data)
    {
        //game, parent, name, addToStage, enableBody, physicsBodyType
        super(game, null, 'barrels', false, true);

        this.x = data.x;
        this.y = data.y;
        this.speed = speed;

        this.game.add.existing( this );

        this.createBarrel();

        // Initiale barrel creation
        this.barrelCreator = this.game.time.events.loop(Phaser.Timer.SECOND * frequency, this.createBarrel, this);

    }

    createBarrel()
    {
        //give me the first dead sprite
        let barrel = this.getFirstExists(false);

        if(!barrel)
        {
          barrel = this.create(this.x, this.y, 'barrel');
        }

        barrel.body.collideWorldBounds = true;
        barrel.body.bounce.set(1, 0);

        barrel.reset(this.x, this.y);

        barrel.body.velocity.x = this.speed;
  }
}


export default Barrels;
