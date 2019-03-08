/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */
let game;
const keyButtons = document.querySelectorAll(`.key`)
// event listener that triggers a new game object and a call to the startGame method
document.querySelector(`#btn__reset`).addEventListener(`click`, function(){
  game = new Game();
  game.startGame();

});

// adding an event listener to each of the key buttons that calls the handleInteraction method
for(let key of keyButtons){
key.addEventListener(`click`, function(e){
  game.handleInteraction(key)
  });
}
