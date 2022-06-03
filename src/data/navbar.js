import { NavLink } from "react-router-dom";

export const RenderLinks=()=>{
    return(
   navLinks.map(({id,url,title})=>{
        return(<li key={id} className="nav-item">
          <NavLink
            to={url}
            className={({ isActive }) => {
              return isActive ? "nav-link active" : "nav-link";
            }}
          >
            {title}
          </NavLink>
        </li>)
      })    
    )
}


export const navLinks=[
    {
        id: 'pogadjanjeBrojeva',
        title: 'Pogađanje Brojeva',
        url: '/pogadjanjeBrojeva',
      },
      {
        id: 'zmijaBorna',
        title: 'ZmijaBorna',
        url: '/zmijaBorna',
      },
      {
        id: 'ivaninaIgra',
        title: 'Ivanina igra',
        url: '/ivaninaIgra',
      },
      {
        id: 'computerGuessesNumber',
        title: 'ComputerGuessesNumber',
        url: '/computerGuessesNumber',
      },
      {
        id: 'alanovaIgra',
        title: 'Flood It!',
        url: '/alanovaIgra',
      },
      {
        id: 'mirelinaIgra',
        title: 'Mirelana Igra',
        url: '/mirelinaIgra',
      },
      {
        id: 'brunovaIgra',
        title: 'brunovaIgra',
        url: '/brunovaIgra',
      },
      {
        id: 'dragicaIgra',
        title: 'dragicaIgra',
        url: '/dragicaIgra',
      },
      {
        id: 'tonijevaIgra',
        title: 'tonijevaIgra',
        url: '/tonijevaIgra',
      },
      {
        id: 'darijinaIgra',
        title: 'darijinaIgra',
        url: '/darijinaIgra',
      },
      {
        id: 'tinovaIgra',
        title: 'Kockice',
        url: '/tinovaIgra',
      },
      {
        id: 'tomislavovaIgra',
        title: 'Memory game',
        url: '/tomislavovaIgra',
      },
      {
        id: 'lukaFundaIgra',
        title: 'Brzi klik',
        url: '/lukaFundaIgra',
      },
      {
        id: 'domagojevaIgra',
        title: 'TICtacTOE',
        url: '/domagojevaIgra',
      },
      {
        id: 'SnakeLukaStegic',
        title: 'Snake',
        url: '/SnakeLukaStegic',
      },
      {
        id: 'highscore',
        title: 'Highscore',
        url: '/highscore',
      },
  
]
