function preload ()
{
  this.load.image('background', 'assets/example.png')
  this.load.image('character', 'assets/idle01.png')
  this.load.image('enemy', 'assets/hit02.png')
}

function create ()
{

  this.add.image(0, 300, 'background')
  this.add.image(300, 620, 'character').setScale(3);
  this.add.image(600, 610, 'enemy').setScale(3);
}

function update ()
{
}

let player;

const config = {
  type: Phaser.AUTO,
  width: 800,
  height: 800,
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
