import React, { Component } from "react";
import "./MirelaKlikKlik.css";

export default class Kocka extends Component {
  constructor(props) {
    super(props);
    this.state = {
      player1CurrentResult: 0,
      player2CurrentResult: 0,
      player1Results: [],
      player2Results: [],
      feedback: "",
    };
  }

  player1Game = () => {
    this.setState({
      player1CurrentResult: this.state.player1CurrentResult + 1,
      player1Results: [
        ...this.state.player1Results,
        this.state.player1CurrentResult,
      ],
    });
  };

  player2Game = () => {
    this.setState({
      player2CurrentResult: this.state.player2CurrentResult + 1,
      player2Results: [
        ...this.state.player2Results,
        this.state.player2CurrentResult,
      ],
    });
  };

  //funkcija za dobiti pobjednika
  choosingWinner = () => {
    if (this.state.player1CurrentResult >= 5) {
      this.state.feedback = "Pobjednik je Igrač 1.";
    } else if (this.state.player2CurrentResult >= 5) {
      this.state.feedback = "Pobjednik je Igrač 2.";
    }
  };
  // NE ZNAM KAKO RESERTIRATI NA POČETNO STANJE !!!!!
  // newGame = () => {
  //   this.state.feedback = "";
  //   this.state.player1CurrentResult = 0;
  //   this.state.player2CurrentResult = 0;
  //   this.state.player1Results = [];
  //   this.state.player2Results = [];
  // };

  render() {
    return (
      <>
        <h1 className="animate__animated animate__bounceInLeft">
          First finger
        </h1>

        <button onClick={() => this.player1Game()}>PLAYER 1</button>
        <br />
        <br />
        <button onKeyDown={() => this.player2Game()}>PLAYER 2</button>
        <br />
        <br />

        {this.choosingWinner()}
        <h4>
          Rezultat:{" "}
          {this.state.feedback ? this.state.feedback : "Igrajte dalje"}
        </h4>
        <button onClick={() => this.newGame()}>New Game </button>
      </>
    );
  }
}

{
  /* <button
  className="btn-tome"
  onClick={() => {
    console.log("asd");
    dodajUHighscore("Tomislavova Igra", {
      ime: username,
      rezultat: turns,
    });
  }}
>
  Spremi rezultat!
</button>; */
}
