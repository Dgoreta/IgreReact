import React from "react";

function GameOver(props) {
  console.log(props);
  const gameOverFunc = function () {
    props.dodajUHighScore(
      "Snnake",
      {
        ime: props.username,
        rezultat: props.highScore,
      },
      false
    );
  };
  return (
    <div
      id="GameBoard"
      style={{
        width: props.width,
        height: props.height,
        borderWidth: props.width / 50,
      }}
    >
      <div id="GameOver" style={{ fontSize: props.width / 15 }}>
        <div id="GameOverText">GAME OVER</div>
        <div>Your score: {props.score}</div>
        <div>
          {props.newHighScore ? "New local " : "Local "}high score:{" "}
          {props.highScore}
          {gameOverFunc()}
        </div>
        <div id="PressSpaceText">Press Space to restart</div>
      </div>
    </div>
  );
}

export default GameOver;
