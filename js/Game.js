/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

 class Game{
   constructor(){
       this.missed = 0;
       this.phrases = this.createPhrases();
       this.activePhrase = null;
    };
    /**
    * Selects random phrase from phrases property
    * @return {Object} Phrase object chosen to be used
    */

    getRandomPhrase(){
      const randPhrase = Math.floor(Math.random() * (this.phrases.length) - 1) +1;
      return this.phrases[randPhrase];

    };
    /**
    * checks to see if the button clicked by the player matches a letter in the phrase
    * @param {HTML button element} button that handles the key based interaction
    */

    handleInteraction(button){
      console.log(button);
      // button's disabled property is set to true
      button.disabled = true;
      // defining the variable letter to be equal to the text content of the button
      const letter = button.textContent;
      /**conditional statement using the letter variable defined by the text content of the keyButtons
      * and passing that as the parameter of the checkLetter() method to return a boolean
      */
      if(!this.activePhrase.checkLetter(letter)){
        //call to the removeLife method and setting the buttons classname to wrong
        this.removeLife();
        button.className = `wrong`;
        // if check letter returns true then corresponding attributes are set to their winning styles
      }else{
        const lettersArray = document.querySelectorAll(`.hide`)
        lettersArray.forEach(function(element) {
          if(element.textContent === letter){
            game.activePhrase.showMatchedLetter(letter);
          }
        });
        button.className = `chosen`;
        this.checkForWin();
      }
    };
    /**
    * Removes 1 life from players scorboard
    *
    */

    removeLife(){
      // defining variables and setting values;
      let hearts = document.querySelectorAll(`img`);
      this.missed += 1;
      let index = this.missed - 1;
      // conditional statement getiing and setting the correct heart images
      if(hearts[index].getAttribute(`src`) === `images/liveHeart.png`){
          hearts[index].setAttribute(`src`, `images/lostHeart.png`);

        }
        // condtional statement to test if the gameOver() needs to be called with a flase value
      if(this.missed === 5){
        this.gameOver(false);
      }

    };

    /**
    * Initializes the game
    * Sets overlay display to none and defines the active hrase property
    */

    startGame(){
      document.querySelector(`#overlay`).style.display = 'none';
      this.activePhrase = this.getRandomPhrase();
      this.activePhrase.addPhraseToDisplay();
    };
    /**
    * Checks to see if player has revealed all of the letters of the active phrase
    *
    */

    checkForWin(){
      // grabbing the letters with the class name `hide`
      const lettersArray = document.querySelectorAll(`.hide`)
      // conditional statement to see if the number of letters with the hide class name is zero
      if(lettersArray.length === 0){
        // if there are zero latters with .hide then the gameOver() is called with true as its value
        this.gameOver(true);
      }
    };
    /**
    * Displays the original start screen and updates the h1 element with a win or loss message
    * @param {Boolean} boolean - true || false value based on outcome of game
    */

    gameOver(gameWon){
      //vairables containing document objects as needed
      const h1 = document.querySelector(`#game-over-message`);
      const lettersArray = document.querySelectorAll(`.hide`);
      const button = document.querySelector(`#btn__reset`)
      let overlay = document.querySelector(`#overlay`);
      // making the overlay display visible
      overlay.style.display = 'block'
      // if gameWon === true then the start button is altered so that it reloads the window object
      if(gameWon){
      button.textContent = `Play Again?`;
      button.id = `reload`;
      button.addEventListener(`click`, function (e){
        window.location.reload(false);
      });
      // and the game over message says `You Win` will the overkay class name is set to `win`
      h1.textContent = `You win!`;
      overlay.className = `win`;
      //if gameWon === false then the start button is altered so that it reloads the window object
    }else if(!gameWon){
      button.textContent = `Play Again?`
      button.id = `reload`;
      button.addEventListener(`click`, function (e){
        window.location.reload(false);
    });
          //and the text content and class name of the overlay is altered to reflect the losing message
          overlay.className = `lose`;
          h1.textContent = `Better Luck Next Time`;

      }

    };
    /**
    * Creates phrases for use in game
    * @return {array} An array of phrases that could be used in the game
    */

    createPhrases() {
        const phrases = [new Phrase ("Wookie"),
                         new Phrase ("The Force will be with you"),
                         new Phrase ("Never Tell Me the Odds"),
                         new Phrase ("Dagobah"),
                         new Phrase ("Yoda")];

        return phrases;

    };
 };
