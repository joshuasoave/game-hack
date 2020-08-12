# :apple: The Apple of Immortality :apple:

![img of game](https://i.imgur.com/eouF6VV.png)

### :bulb: Creator:

- Joshua Soave

## :mag: About:

[The Apple of Immortality](https://secret-everglades-49869.herokuapp.com/) is a web based game where the player has to save the apple from being stolen by an evil Plague Doctor who wants to curse the town.

## The Build:

### Languages
- HTML5
- CSS3
- Javascript
### Technologies
- [Phaser.io](http://phaser.io/)

## :white_check_mark: Wins:
- Building the game within the 4 hour timeframe alloted.
- Coming up with a way for the player to win by using their position or the enemy position if they win.

```Javascript
//////
///win
//////
// console.log(player.x);
// console.log(player.y);
//position of the apple
if(475 < player.x < 478 && player.y <= 96){
  // console.log(
  //   'you win'
  // );
  //win text
  this.add.text(100, 200, "You got the apple of immortality!").setScale(2)
  this.add.text(200, 300, "You win!").setScale(2)
  //enemy destroyed
  enemy.destroy()
}
```

## :interrobang: Struggles :interrobang:
- The starter code given by phaser.io did not deploy well with Heroku. I worked around this by making an express server and serving the game up there.

##  Future Features
- Allow the player and enemy sprites to fight one another and try to stop each other from getting the apple.
