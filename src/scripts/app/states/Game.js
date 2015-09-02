/*
 * Game state
 * ============================================================================
 *
 * A sample Game state, displaying the Phaser logo.
 */
import Ground from '../objects/Ground';
import Player from '../objects/Player';
import Goal from '../objects/Goal';
import Platforms from '../objects/Platforms';
import Fires from '../objects/Fires';
import Barrels from '../objects/Barrels';

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

        // Add platforms
        this.platforms = new Platforms(this.game, this.levelData.platformData);

        // Add goal
        this.gloal = new Goal(this.game, this.levelData.goal.x, this.levelData.goal.y);

        // Add fires
        this.fires = new Fires(this.game, this.levelData.fireData );

        // Add barrels
        this.barrels = new Barrels(this.game, this.levelData.barrelFrequency, this.levelData.barrelSpeed, this.levelData.goal );
    }

    update()
    {
        // Player
        this.game.physics.arcade.collide(this.player, this.ground);
        this.game.physics.arcade.collide(this.player, this.platforms);
        // Barrels
        this.game.physics.arcade.collide(this.barrels, this.ground);
        this.game.physics.arcade.collide(this.barrels, this.platforms);

        // Win state
        this.game.physics.arcade.overlap(this.player, this.goal, this.player.die.bind(this));
        // Lose when touching fire
        this.game.physics.arcade.overlap(this.player, this.fires, this.player.die.bind(this));
        // Lose when touching barrel
        this.game.physics.arcade.overlap(this.player, this.barrels, this.player.die.bind(this));

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

        // Remove barrels
        this.barrels.forEach( (element) => {
            if(element.x < 10 && element.y > 500)
            {
                element.kill();
            }
        }, this);
    }

    win(player, goal)
    {
        alert('you win!');
        this.game.state.start('Game');
    }
}
