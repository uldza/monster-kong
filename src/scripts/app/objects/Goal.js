/*
 * Goal
 */


class Goal extends Phaser.Sprite {

  constructor (game, x, y) {
    super(game, x, y, 'goal');

    this.game.physics.arcade.enableBody(this);
    this.body.allowGravity = false;

    this.game.add.existing( this );
  }

}


export default Goal;
