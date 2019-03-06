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
    *
    */

    handleInteraction(){

    };
    /**
    * Removes 1 life from players scorboard
    *
    */

    removeLife(){

    };

    /**
    * Initializes the game
    *
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

    };
    /**
    * Displays the original start screen and updates the h1 element with a win or loss message
    *
    */

    gameOver(){

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
