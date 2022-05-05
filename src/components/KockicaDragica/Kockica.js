import React from 'react';
import "./Kockica.css";
class Kockica extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            gameName: "Kockice Dragice!",
            dice1Value: 0,
            dice2Value: 0,
            numberOfTries: 0,
            maxNumberOfTries: 5,
            isGameOver: false,
            isGameWon: false,
            isScoreStored: false
        };
    }
    GameOver = () =>{
        this.setState({
            isGameOver: true
        });
    }
    CompareDice = () =>{
        if(this.state.dice1Value === this.state.dice2Value)
        {
            this.setState ({
                numberOfTries: this.state.numberOfTries + 1,
                isGameWon: true
            })
            this.GameOver();
        }
        else if(this.state.numberOfTries === this.state.maxNumberOfTries)
        {
            this.GameOver();
        }
        else{
            this.setState ({
                numberOfTries: this.state.numberOfTries + 1
            })
        }
    }

    SetDiceValues = () =>{
        this.setState(() => ({
            dice1Value: Math.floor(Math.random() * 6 + 1),
            dice2Value: Math.floor(Math.random() * 6 + 1),
        }), () => this.CompareDice())
    }
    StoreResult = () =>{
        if (this.state.isScoreStored === false)
        {
            this.props.dodajUHighscore(this.state.imeIgre, {
                ime: this.props.username,
                rezultat: this.state.numberOfTries
            },false)
            this.setState({isScoreStored: true})
            alert("Rezultat je unesen!")
        }
        alert("Sorry, rezultat je već unesen!")
    }
    StartGame = () =>{
        this.SetDiceValues();
    }
    TryAgain = () =>{
        this.setState({
            dice1Value: 0,
            dice2Value: 0,
            numberOfTries: 0,
            isGameOver: false,
            isGameWon: false,
            isScoreStored: false
        })
    }
    render() {
        return (
            <div className='outerdiv'>
                <div className='innerdiv'>
                    <div className='user'>
                        <p>User name: {this.props.username}</p>
                        <h1>Kockice Dragice!</h1>
                        <p>Pokušaj dobiti isti broj na obe kockice u što manje pokušaja!</p>
                        <p className='gameover' style={this.state.isGameOver ? {display: 'block'} : {display: 'none'}}>
                            {(this.state.isGameOver && this.state.isGameWon) ? "YOU WIN" : "GAME OVER"}
                        </p>
                    </div>
                    <div className='dice'>
                        <p className='kockice'>{this.state.dice1Value}</p>
                        <p className='kockice'>{this.state.dice2Value}</p>
                    </div>
                    <div className='tries'>
                        <p>Broj pokušaja: {this.state.numberOfTries}</p>
                        <button onClick={this.StartGame}
                        disabled={this.state.isGameOver}>Klikni me!
                        </button>
                    </div>
                    <div className='endgame'>
                        <button onClick={this.StoreResult}
                        disabled={!this.state.isGameOver}>
                            Unesi rezultat
                        </button>
                        <button onClick={this.TryAgain}
                        disabled={!this.state.isGameOver}>
                            Pokušaj ponovno
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}
export default Kockica;