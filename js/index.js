//spara summan av poäng i playerScore och computerScore och sätt den till 0
let playerScore = 0;
let computerScore = 0;
// Step 1: Be spelaren välja 
function playGame() {
  const playerChoice = prompt('Välj sten, sax eller påse').toLowerCase();

  if (playerChoice !== 'sten' && playerChoice !== 'sax' && playerChoice !== 'påse') {
  console.log('❌Ogiltigt val! Välj bara: sten, sax eller påse.');
  askToPlayAgain(); // för att inte rundan ska ta slut 
  return;
}

// Step 2: Låt datorn välja på random 
const choices = ['sten', 'sax', 'påse']; 
const randomIndex = Math.floor(Math.random()*choices.length);
computerChoice = choices[randomIndex]; 

// Steg 3: Visa vad båda valt 
console.log('Du valde: ', playerChoice); 
console.log('Datorn valde: ', computerChoice); 

// Steg 4: Välj en vinnare
if (playerChoice === computerChoice) {
  console.log('Oavgjort!');
} else if ( 
  (playerChoice == 'sten' && computerChoice== 'sax') || 
  (playerChoice == 'sax' && computerChoice == 'påse') || 
  (playerChoice == 'påse' && computerChoice == 'sten')
) {
  console.log('Du vinner!');
  playerScore++;
} else if (
  (playerChoice == 'sten' || playerChoice == 'påse' || playerChoice == 'sax')
) {
  console.log('Datorn vinner');
  computerScore++;
} 
  console.log('Din poäng: ' + playerScore);
  console.log('Datorns poäng: ' + computerScore);

  askToPlayAgain();
}

function askToPlayAgain() {
  const playAgain =prompt('Vill du spela igen? (ja/nej)').toLowerCase();
  if (playAgain == 'ja'){
    playGame();
  } else if  (playAgain == 'nej') {
    console.log('Tack för att du spelade! Slutpoäng: Du: ' + playerScore + ', Datorn: ' + computerScore);
  } else { 
    console.log('Inmatning var ej korrekt, börja om!');
  }
}

playGame();