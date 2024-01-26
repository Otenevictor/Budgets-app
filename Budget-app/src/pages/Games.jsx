import  { useState }  from "react";
import MysteryBox from "./MysteryGame";


function GuessingGame() {
    const [secretNumber, setSecreteNumber] = useState(Math.floor(Math.random() * 81) + 20);
    const [guess, setGuess] = useState('');
    // const [numGuesses, setNumGuesses] = useState(0);
    const [message, setMessage] = useState(''); 

    // function to handle guess submission
    const handleGuessSubmit = (event) => {
        event.preventDefault();

        // validate the guess
        

            const parsedGuess = parseInt(guess, 10);
            // // if (parsedGuess === secretNumber) {
            // //     setMessage("Invalid guess: Please enter a number greater than or equal to 20.");
            // // }
            // setNumGuesses(numGuesses + 1);
            if (parsedGuess === secretNumber) {
                setSecreteNumber(Math.floor(Math.random() * 81) + 20 )
                setMessage('You win! you guessed the number in guesses.');
            } else if (parsedGuess > secretNumber) {
                setMessage('your guess is too low. try again.');
            } else {
                setMessage('your guess is too high. Try again.');
            }
            setGuess (''); 
        
      
    };

    return (
        <div>
            <h1>gussing Game</h1>
            <p>Guess a number between 20 and 100:</p>
            <form onSubmit={handleGuessSubmit}>
                <input type="number" value={guess} onChange={(event )=> setGuess(event.target.value)} />
                <button type="submit">Guess</button>
            </form>
            <p>{message}</p>


            <div>
                <MysteryBox/>
            </div>
        </div>
    )

}
   

 export default GuessingGame;