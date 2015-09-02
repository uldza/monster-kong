/*
 * Player
 */


class Player extends Phaser.Sprite {

  constructor (game, x, y) {
    super(game, x, y, 'player', 3);

    // Player movement constants
    this.RUNNING_SPEED = 180;
    this.JUMPING_SPEED = 550;

    this.anchor.setTo(0.5);
    this.animations.add('walking', [0, 1, 2, 1], 6, true);

    this.game.physics.arcade.enableBody(this);
    //this.body.allowGravity = false;
    this.body.collideWorldBounds = true;


    this.customParams = {};

    this.game.camera.follow( this );
    this.game.add.existing( this );
  }

  stop()
  {
      this.body.velocity.x = 0;
  }

  stopMove()
  {
      this.animations.stop();
      this.frame = 3;
  }

  moveLeft()
  {
      this.body.velocity.x = -this.RUNNING_SPEED;
      this.scale.setTo(1, 1);
      this.play('walking');
  }

  moveRight()
  {
      this.body.velocity.x = this.RUNNING_SPEED;
      this.scale.setTo(-1, 1);
      this.play('walking');
  }

  jump()
  {
      this.body.velocity.y = -this.JUMPING_SPEED;
      this.customParams.mustJump = false;
  }

}


export default Player;
