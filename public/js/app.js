

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
  this.load.image('apple', './assets/item__64.png')
}

function create ()
{
  //bg
  this.add.image(0, 380, 'background')
  // this.add.image(440, 150, 'apple').setScale(2)

  const apple = this.physics.add.image(440, 150, 'apple').setScale(2)
  //to keep the apple in place
  apple.body.gravity.y = -800;

  ////////
  //player
  /////////
  player = this.physics.add.sprite(200, 800, 'character').setScale(3);
  player.setBounce(0.2);
  player.setCollideWorldBounds(true);

  //////
  //enemy
  ////
  enemy = this.physics.add.sprite(600, 800, 'enemy').setScale(3);
  enemy.setBounce(0.2);
  enemy.setCollideWorldBounds(true);

  /////
  //collide
  ///
  this.physics.add.collider(
    player,
    enemy
  )

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


  //////
  ///win
  //////
  // console.log(player.x);
  // console.log(player.y);
  if(475 < player.x < 478 && player.y <= 96){
    // console.log(
    //   'you win'
    // );
    //win text
    this.add.text(100, 200, "You got the apple of immortality!").setScale(2)
    this.add.text(200, 300, "You win!").setScale(2)
  }
  ///////
  //lose
  //////
  if(475 < enemy.x < 478 && enemy.y <= 96){
    // console.log(
    //   'you lose'
    // );
    this.add.text(100, 200, "Oh no! The evil plague doctor got the apple!").setScale(1.5)
    this.add.text(400, 300, "You lose!").setScale(1.5)
  }
}

const game = new Phaser.Game(config);
