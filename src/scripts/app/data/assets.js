/*
 * The `assets` module
 * ============================================================================
 *
 * Use this module to declare static Phaser Asset Packs, that would be loaded
 * using the `Loader#pack` API.
 *
 * Regarding how the game assets should be declared using this file, refer to
 * the sample `assetPack.json` included in the Phaser package, under
 * `node_modules/phaser/resources/` directory, for a more complete
 * reference.
 *
 */


export default {

  // - Boot Assets ------------------------------------------------------------
  boot: [
    {
      key: 'splash-screen',
      type: 'image'
    },

    {
      key: 'progress-bar',
      type: 'image'
    }
  ],

  // - Game assets ------------------------------------------------------------
  game: [
    {
      key: 'phaser',
      type: 'image'
    },
    {
        key: 'ground',
        type: 'image'
    },
    {
        key: 'platform',
        type: 'image'
    },
    {
        key: 'goal',
        type: 'image'
    },
    {
        key: 'barrel',
        type: 'image'
    },
    {
        key: 'arrowButton',
        type: 'image'
    },
    {
        key: 'actionButton',
        type: 'image'
    },
    {
        key: 'player',
        type: 'spritesheet',
    },
    {
        key: 'fire',
        type: 'spritesheet',
    },


    // Example: adding a background music.
    // {
    //   key: 'tune',
    //   type: 'audio',
    //   urls: [ 'tune.oga', 'tune.m4a' ]
    // }

    // Example: adding a audio sprite containing sound effects.
    // {
    //   key: 'sfx',
    //   type: 'audiosprite',
    //   urls: [ 'sfx.m4a' ],
    //   jsonURL: 'sfx.json'
    // }
  ]

};
