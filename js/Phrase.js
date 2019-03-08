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
       // for loop to split this.phrase into an array of individual string characters
       for (let i = 0; i < this.phrase.length; i++) {
           this.phrase[i].split('');
           //creation of the li elements and setting their text content
           let liLetters = document.createElement(`li`);
                 liLetters.textContent = this.phrase[i];
            //conditiontial statement testing if it is a space or character, and setting
            //the appropriate class names for each
           if (this.phrase[i] === ' ') {
                     liLetters.className = `space`;
           } else {
               liLetters.className = `hide letter ${this.phrase[i]}`;
           }
           //appending the newly created li elements to the ul parent
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
     //intitializes the check statement
     let check = false;
     //selecting the ul element
     const ul = document.querySelector(`ul`);
     // for of loop with conditional statement testing if the text content is equal to the input letter
     for(let letters of ul.childNodes){
          if (letters.textContent === letter){
            // if the conditiontal statement returns true, then check is set to true
            check = true;
          }
     }
     // returning the true or false value of check dependent on the result of the conditional
     return check;
 };
   /**
   * reveals the letter(s) on the board that matches the players selection
   *
   */

   showMatchedLetter(letter) {
     // capturing the elements in the document with the css class of hide and storing them in a variable
     const lettersArray = document.querySelectorAll(`.hide`);
     //iterates over the liLetters variable with a .forEach() method and tests if the elements text content
     //matches the input letter
     lettersArray.forEach(function(element) {
         if(element.textContent === letter){
            // sets the elements class name to show based on the results of the conditional
             element.className = `show`;

         }
     });
     game.checkForWin();
   }
};
