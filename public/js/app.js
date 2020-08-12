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
      gravity: { y: 800, x: 0 },
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
  //bg
  this.add.image(0, 380, 'background')


  ////////
  //player
  /////////
  player = this.physics.add.image(200, 800, 'character').setScale(3);
  player.setBounce(0.2);
  player.setCollideWorldBounds(true);

  //////
  //enemy
  ////
  enemy = this.physics.add.image(600, 800, 'enemy').setScale(3);
  enemy.setBounce(0.2);
  enemy.setCollideWorldBounds(true);




  //  Input Events
  cursors = this.input.keyboard.createCursorKeys();
}

function update ()
{
  if (cursors.left.isDown)
  {
    player.setVelocityX(-200);
  }
  else if (cursors.right.isDown)
  {
    player.setVelocityX(200);
  }
  else
  {
    player.setVelocityX(0);
  }

if (cursors.up.isDown)
  {
    player.setVelocityY(-200);
  }

//////
//enemy
////

  enemy.setVelocityX(150 - Math.random() * 330)
  enemy.setVelocityY(150 - Math.random() * 400)
}

const game = new Phaser.Game(config);
