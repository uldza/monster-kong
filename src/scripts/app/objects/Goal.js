/*
 * Goal
 */


class Goal extends Phaser.Sprite {

  constructor (game, x, y) {
    super(game, x, y, 'goal');

    this.game.physics.arcade.enable(this);
    this.body.allowGravity = false;

    this.game.add.existing( this );
  }

}


export default Goal;
