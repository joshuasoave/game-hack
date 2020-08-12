/////////
//config
////////
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

/////
//init
////
let player;
let enemy;


/////
///functions
/////
function preload ()
{
  this.load.image('background', './assets/example.png')
  this.load.image('character', './assets/idle01.png')
  this.load.image('enemy', './assets/hit02.png')
}

function create ()
{

  this.add.image(0, 300, 'background')

  this.add.image(600, 610, 'enemy').setScale(3);

  ////////
  //player
  /////////
  player = this.physics.add.image(300, 620, 'character').setScale(3);
  player.setBounce(0.2);
  player.setCollideWorldBounds(true);


  //  Input Events
  cursors = this.input.keyboard.createCursorKeys();
}

function update ()
{
  if (cursors.left.isDown)
  {
    player.setVelocityX(-160);
  }
  else if (cursors.right.isDown)
  {
    player.setVelocityX(160);
  }
  else
  {
    player.setVelocityX(0);
  }

if (cursors.up.isDown && player.body.touching.down)
  {
    player.setVelocityY(-330);
  }
}

const game = new Phaser.Game(config);
