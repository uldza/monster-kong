/*
 * Fires
 */


class Fires extends Phaser.Group {
    constructor(game, fireData)
    {
        super(game, null, 'fires', false, true);
        this.addFires( fireData );

        this.setAll('body.allowGravity', false);

        this.game.add.existing( this );
    }

    addFires( data )
    {
        let fire;

        data.forEach( (element) => {
          fire = this.create(element.x, element.y, 'fire');
          fire.animations.add('fire', [0, 1], 4, true);
          fire.play('fire');
        }, this);
    }
}


export default Fires;
