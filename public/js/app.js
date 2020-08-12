function preload ()
{
}

function create ()
{
}

function update ()
{
}

const config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  scene: {
    preload: preload,
    create: create,
    update: update
  },
  physics: {
    default: "arcade",
    arcade: {
      gravity: { y: 0, x: 0 },
    },
  }
};

const gameSettings = {
  playerSpeed: 10,
  isIntroDone: false,
  isGameDone: false,
  gameTime: 0
}

const game = new Phaser.Game(config);
