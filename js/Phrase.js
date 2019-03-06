/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

 class Phrase{
   constructor(phrase){
     this.phrase = phrase.toLowerCase();
   };
   /**
   * Adds letter placeholders to display when game starts
   *
   */

   addPhraseToDisplay(){

       for (let i = 0; i < this.phrase.length; i++) {
           this.phrase[i].split('');
           let liLetters = document.createElement(`li`);
                 liLetters.textContent = this.phrase[i];

           if (this.phrase[i] === ' ') {
                     liLetters.className = `space`;
           } else {
               liLetters.className = `hide letter ${this.phrase[i]}`;
           }

           const phrase = document.querySelector(`#phrase`);
           phrase.querySelector(`ul`).appendChild(liLetters);
       }
   };
   /**
   * checks to see if the letter selected matches a letter in the phrase
   * @param {string} letter - letter to check
   * @returns {boolean} returns a true or false depending if a letter choose is part of active phrase
   */

   checkLetter(letter){
     let check = false;
     const ul = document.querySelector(`ul`);

     for(let letters of ul.childNodes){
          if (letters.textContent === letter){
            check = true;
          }
     }
     return check;
 };
   /**
   * reveals the letter(s) on the board that matches the players selection
   *
   */

   showMatchedLetter(letter) {
     const ul = document.querySelector(`ul`);

     if(this.checkLetter(letter)){
         ul.childNodes.className = `show`;
          }
      }
};
