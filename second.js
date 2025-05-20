/**
 * Prompt for user choice of weapon 
 * SET variable to userChoice 
 * Random computers weapon (function?)
 * SET variable to computerChoice
 * Determine winner by if-statements (every scenario)
 * Display winner
 */



const userChoice = prompt('Choose your weapon: sten, sax eller påse'); // möjliga värden: 'sten', 'sax' eller 'påse'

let computerChoice; 

function selectComputerWeapon() {
    const randomNumber = Math.floor(Math.random() * 3); // Slumpa ett tal mellan 0-3 Math.floor rundar neråt därför kommer vi aldrig kunna få talet 3 utan det är mellan 0,1 och 2 det ska representera sten sax ohc påse.
if (randomNumber == 0) {
    computerChoice = 'sten'; 

} else if (randomNumber == 1){
    computerChoice = 'sax';

} else if (randomNumber == 2){
    computerChoice = 'påse';
} 
}

function determineWinner(){
    if (userChoice == 'sten') {
        if (computerChoice == 'sten') {
            console.log('Oavgjort');
        } else if (computerChoice == 'sax') {
            console.log('Jag vann!');
        } else if (computerChoice == 'påse') {
            console.log('Datorn vinner!')
        }
    
    } else if (userChoice == 'sax'){
        if (computerChoice == 'sax') {
            console.log('Oavgjort');
        } else if (computerChoice == 'påse') {
            console.log('Jag vann!');
        } else if (computerChoice == 'sten') {
            console.log('Datorn vinner!')
        }
    
    } else if (userChoice == 'påse') {
        if (computerChoice == 'påse') {
            console.log('Oavgjort');
        } else if (computerChoice == 'sten') {
            console.log('Jag vann!');
        } else if (computerChoice == 'sax') {
            console.log('Datorn vinner!')
        }
    } // kan också skrivas if (userChoise == 'sten' && computerChoise == 'sten) { console.log('Oavgjort)
    
    }



selectComputerWeapon();

console.log('Användarens val: ', userChoice);
console.log('Datorns val: ', computerChoice); 

determineWinner();