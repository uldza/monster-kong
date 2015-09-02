/*
 * Platforms
 */


class Platforms extends Phaser.Group {
    constructor (game, platformData) {
        //game, parent, name, addToStage, enableBody, physicsBodyType
        super(game, null, 'platform', false, true);

        this.addPlatforms( platformData );

        this.setAll('body.immovable', true);
        this.setAll('body.allowGravity', false);

        this.game.add.existing( this );
    }

    addPlatforms( data )
    {
        data.forEach( (element) => {
            this.create(element.x, element.y, 'platform');
        }, this);
    }
}


export default Platforms;
