import { useState, useMemo } from "react";

const clues = [
  " I am an even number.",
  "I am a multiple of 7.",
  "I am between two prime numbers.",
  " I am the sum of two perfect squares.",
];

function MysteryBox() {
  // tract the current clue
  const [clueIndex, setClueIndex] = useState(0);
  // generate a random number between 20 and 100
  const [answer, setAnswer] = useState(Math.floor(Math.random() * 81) + 20);
  // store the user's guess
  const [guess, setGuess] = useState("");
  // store feedback message
  const [message, setMessage] = useState("");

  // memoize the generated number for performance
  const memoizedAnswer = useMemo(() => answer, [answer]);

  const showNextClue = () => {
    if (clueIndex === clues.length - 1) {
      setMessage("that was the last clue! can you guess the number?");
    } else {
      setClueIndex(clueIndex + 1);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // convert the user's guess to a number
    const userGuess = parseInt(guess, 10);
    if (userGuess === memoizedAnswer) {
      // Generate new number
      setAnswer(Math.floor(Math.random() * 81) + 20);
      setMessage(
        `congratulations! you guessed the number ${clueIndex + 1} clues!`
      );
    } else {
      setMessage("Try again!");
    }
    // clear the input field after each guess
    setGuess("");
  };

  return (
    <div>
      <h1>Mystery Box</h1>
      <p>
        Im a number between 20 and 100. can you solve the mystery and guess what i am?
      </p>
      <p>{clues[clueIndex]}</p>
      {clueIndex !== clues.length - 1 && (
        <button onClick={showNextClue}>show next clue</button>
      )}
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          value={guess}
          onChange={(event) => setGuess(event.target.value)}
        />
        <button type="submit">Guess</button>
      </form>
      <p>{message}</p>
    </div>
  )
}

export default MysteryBox;
