/*
 * Ground
 */


class Ground extends Phaser.Sprite {

  constructor (game, x, y)
  {
    super(game, x, y, 'ground');
    this.game.physics.arcade.enable(this);

    this.body.allowGravity = false;
    this.body.immovable = true;

    this.game.add.existing( this );
  }

}


export default Ground;
