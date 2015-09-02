/*
 * The `app` module
 * ============================================================================
 *
 * The module providing the main routine of the game application launch.
 */

// Import all declared states as an object.
import * as states from './app/states';


export default function () {
  const game = new Phaser.Game(360, 592, Phaser.AUTO);

  // Dynamically add all required game states.
  Object.keys(states).forEach((key) => game.state.add(key, states[key]));

  game.state.start('Boot');

  return game;
}
