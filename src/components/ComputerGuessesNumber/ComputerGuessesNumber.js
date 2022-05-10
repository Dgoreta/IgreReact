import React, { useState } from "react";

const ComputerGuessesNumber = () => {
  const [playerInput, setPlayerInput] = useState(0);
  const [arrayRange, setArrayRange] = useState(0);
  const [chosenNumber, setChosenNumber] = useState(0);
  const [lastGuessedNumber, setLastGuessedNumber] = useState(0);
  const [startOfRange, setStartOfRange] = useState(1);
  const [endOfRange, setEndOfRange] = useState(0);
  const [computerNumberOfGuesses, setComputerNumberOfGuesses] = useState(0);
  const [seeIfPlayerIsLying, setSeeIfPlayerIsLying] = useState(false);

  function range(size, startAt = 1) {
    let niz = [];
    for (let i = 0; i < size; i++) {
      niz.push(i);
    }
    return niz;
  }

  function checkLie(chosenNumber, lastGuessedNumber, option) {
    if (option === "high" && lastGuessedNumber <= chosenNumber) {
      setSeeIfPlayerIsLying(true);
      return true;
    } else if (option === "low" && lastGuessedNumber >= chosenNumber) {
      setSeeIfPlayerIsLying(true);
      return true;
    } else if (option === "correct" && lastGuessedNumber !== chosenNumber) {
      setSeeIfPlayerIsLying(true);
      return true;
    } else {
      setSeeIfPlayerIsLying(false);
      return false;
    }
  }

  const handlePlayerInput = (e) => {
    setPlayerInput(e.target.value);
  };

  const handleArrayRange = (e) => {
    if (e.key === "Enter") {
      setArrayRange(range(playerInput));
      setEndOfRange(parseInt(playerInput));
    }
  };

  const handleChosenNumber = (e) => {
    setChosenNumber(parseInt(e.target.value));
  };

  function checkIfNumberInRange(range, number) {
    return range.includes(parseInt(number));
  }

  const handleNumberInRange = (e) => {
    if (e.key === "Enter") {
      let check = checkIfNumberInRange(arrayRange, chosenNumber);
      if (check === false) {
        alert("Unešeni broj nije u odabranom rangeu");
        setChosenNumber(0);
        return;
      }
    }
  };

  const generateNumber = (endPoint, startingPoint) => {
    let midPoint = Math.floor((startingPoint + endPoint) / 2);
    setLastGuessedNumber(midPoint);
  };

  const handleGameOption = (option) => {
    if (checkLie(chosenNumber, lastGuessedNumber, option)) {
      alert("varanje");
      return;
    }

    if (option === "high") {
      setEndOfRange(lastGuessedNumber - 1);
      generateNumber(lastGuessedNumber - 1, startOfRange);
      setComputerNumberOfGuesses(computerNumberOfGuesses + 1);
    } else if (option === "low") {
      setStartOfRange(lastGuessedNumber + 1);
      generateNumber(endOfRange, lastGuessedNumber + 1);
      setComputerNumberOfGuesses(computerNumberOfGuesses + 1);
    } else if (option === "correct") {
      setComputerNumberOfGuesses(computerNumberOfGuesses + 1);

      alert(
        "I win!!! Yupi. It took me : " +
          computerNumberOfGuesses +
          " tries :) :) :)"
      );
      resetStatesToDefault();
      return;
    }
  };

  function resetStatesToDefault() {
    setPlayerInput(0);
    setArrayRange(0);
    setChosenNumber(0);
    setComputerNumberOfGuesses(0);
    setEndOfRange(0);
    setStartOfRange(1);
    setLastGuessedNumber(0);
  }

  return (
    <div>
      <div>
        Unesi broj za generiranje duljine niza
        <input
          value={playerInput}
          onChange={handlePlayerInput}
          onKeyUp={handleArrayRange}
        ></input>
      </div>

      <div>
        Ovaj niz ide od: {arrayRange[0]} do {arrayRange[arrayRange.length - 1]}
      </div>

      <div>
        Unesi broj koji zelis da kompjuter pogodi
        <input
          value={chosenNumber}
          onChange={handleChosenNumber}
          onKeyUp={handleNumberInRange}
        ></input>
        <p>Broj koji si odabra za pogadanje je: {chosenNumber}</p>
      </div>

      <button
        onClick={() => {
          generateNumber(endOfRange, startOfRange);
        }}
      >
        START GAME
      </button>

      <div>{seeIfPlayerIsLying && <div>CHEATING!</div>}</div>

      <div>
        <p>
          Klikni na jednu od doli navedeni opcija kako bi navodia program da
          pogodi broj
        </p>

        <a
          href="#"
          onClick={() => {
            handleGameOption("high");
          }}
        >
          <img
            src="https://imgs.search.brave.com/PKqraXZtiHU0utD089Z6fQuRuGIIM3CYvG7BjwH7nak/rs:fit:600:440:1/g:ce/aHR0cDovL3RleHR1/dHMuY29tL2ltYWdl/cy90dXRvcmlhbHMv/aGlnaC9IaWdoX1RF/XzEuanBn"
            alt="high option"
            width="20%"
          />
        </a>

        <a
          href="#"
          onClick={() => {
            handleGameOption("low");
          }}
        >
          <img
            src="https://imgs.search.brave.com/si8QKoCaetRyF519kbTqMkTZlCzvPv5ExTnoF0lZh9s/rs:fit:1024:1024:1/g:ce/aHR0cDovL2Nkbi5z/aG9waWZ5LmNvbS9z/L2ZpbGVzLzEvMTk1/Mi8wMzkxL3Byb2R1/Y3RzL0dJQU5UX0dF/TkVSQVRPUl9MT1df/TE9HT19TVElDS0VS/X01PQ0tfMTAyNHgx/MDI0LmpwZz92PTE1/MTEyODkxNjM"
            alt="low option"
            width="20%"
          />
        </a>

        <a
          href="#"
          onClick={() => {
            handleGameOption("correct");
          }}
        >
          <img
            src="https://imgs.search.brave.com/WxxM-HL43ka8g-tM6pZydfFxKikwIoGXYunknUFTTkg/rs:fit:600:600:1/g:ce/aHR0cDovL3d3dy5j/bGtlci5jb20vY2xp/cGFydHMvOS9NL3Yv/Zi9IL2QvY29ycmVj/dC1tYXJrLWhpLnBu/Zw"
            alt="correct option"
            width="20%"
          />
        </a>
      </div>

      <div>
        U ovaj div ce ic brojevi koji je kompjuter generira {lastGuessedNumber}
      </div>

      <div>
        U ovaj div ce ic brojac koji pokazuje koliko je pokusaja tribalo
        kompjuteru da pogodi zamisljeni broj + {computerNumberOfGuesses}
      </div>
    </div>
  );
};
export default ComputerGuessesNumber;
