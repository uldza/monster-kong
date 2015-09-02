/*
 * Game state
 * ============================================================================
 *
 * A sample Game state, displaying the Phaser logo.
 */
import Ground from '../objects/Ground';
import Player from '../objects/Player';

export default class Game extends Phaser.State {
    init()
    {
        this.game.physics.startSystem(Phaser.Physics.ARCADE);
        this.game.physics.arcade.gravity.y = 1000;

        this.cursors = this.game.input.keyboard.createCursorKeys();

        this.game.world.setBounds(0,0,360,700);
    }

    create()
    {
        // Load level data
        this.levelData = JSON.parse(this.game.cache.getText('level'));

        // Load ground
        this.ground = new Ground(this.game, 0, 638);

        // Load player
        this.player = new Player(this.game, this.levelData.playerStart.x, this.levelData.playerStart.y);
    }

    update()
    {
        this.game.physics.arcade.collide(this.player, this.ground);

        this.player.stop();

        // Player movement
        if(this.cursors.left.isDown || this.player.customParams.isMovingLeft)
        {
            this.player.moveLeft();
        }
        else if(this.cursors.right.isDown || this.player.customParams.isMovingRight)
        {
            this.player.moveRight();
        }
        else
        {
            this.player.stopMove();
        }

        // Player jump
        if((this.cursors.up.isDown || this.player.customParams.mustJump) && this.player.body.touching.down)
        {
            this.player.jump();
        }
    }
}
