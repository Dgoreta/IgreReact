import React, { Component } from 'react';
import "./Throwandguess.css";

export default class Throwandguess extends Component {
    constructor(props) 
    {
        super(props);
        const inicijalnoStanje = 
        {
            imeIgre: "darijinaIgra",
            kockica1: 0,
            kockica2: 0,
            kockica3: 0,
            brojBacanja: 0,
            feedback: "",
        };

        this.state = inicijalnoStanje;
    }
    
    baciKockicu=()=>
    {   
        if(this.state.kockica1 + this.state.kockica2 + this.state.kockica3 === 15)
         {
            this.setState ({
            feedback:"Winner!!",
            })
         }
            
        else if(this.state.brojBacanja<10){
            this.setState ({
              kockica1: Math.floor((Math.random() * 6) + 1),
              kockica2: Math.floor((Math.random() * 6) + 1),
              kockica3: Math.floor((Math.random() * 6) + 1),
              brojBacanja: this.state.brojBacanja + 1,
            })
          }   
        else {
            this.setState({
                feedback: "Game Over",
            })
       }
    };

    saveResults = () => 
    { if(this.state.feedback === "Winner!!") {
      this.props.dodajUHighscore(this.state.imeIgre, {
        username: this.props.username,
        rezultat: this.state.brojBacanja,
      })}
      else if (this.state.feedback === "Game over") {
        alert("Igra je gotova pokusajte ponovno")
      }
      else {alert(`Preostalo je  ${10 - this.state.brojBacanja} bacanja `) }
    }

    repeat = () =>
    {
        this.setState({
          
            kockica1: 0,
            kockica2: 0,
            kockica3: 0,
            brojBacanja: 0,
            feedback: ""
          })
    }


  render() {
    return (
      <div className='glavni'>
        <h1>Throw and guess</h1>
        <p>Cilj igre je da je zbroj kockica jednak 15. Na raspolaganju imate 10 bacanja.</p> <br/> <br/>
        <div className='kockica-div'>
          <div className='kockica1 kockica'>
            {this.state.kockica1}
          </div>

          <div className='kockica2 kockica'>
            {this.state.kockica2}
          </div>

          <div className='kockica3 kockica'>
            {this.state.kockica3}
          </div>

        </div>

        <div className='brojBacanjaiSuma'>
          <p>Broj bacanja: {this.state.brojBacanja} </p>  <br />
          <p>Zbroj bacanja: {this.state.kockica1 + this.state.kockica2 + this.state.kockica3} </p>
        </div>

        <div className='brojBacanjaiSuma'>
          <button  className='button' onClick={this.baciKockicu}>Baci kockicu</button>
          <button  className='button' onClick={this.saveResults}>Spremi rezultat</button>
          <button  className='button' onClick={this.repeat}>Ponovi igru</button>
        </div>
      
        <div className='feedback'>
          {this.state.feedback} 
        </div>
        
      </div>
    )
  }
}


