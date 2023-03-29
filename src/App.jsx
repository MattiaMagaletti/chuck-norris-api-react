import { useState } from 'react'
import Title from './components/Title'
import './styles/App.css'
import Button from './components/Button'
import Dropdown from './components/Dropdown'
import JokeText from './components/Joketext'


function App() 
{
  const [joke, setjoke] = useState("");
  const [category, setcategory] = useState([]);
  let url = "https://api.chucknorris.io/jokes/categories";
  fetch(url).then((resp)=>{
    return resp.json();
  }).then(data=>{
    data.unshift("random");
    setcategory(data);
  }).catch((e)=>{
    console.log(e)
  })

  let loadTextCallback = function ()
  {
    let categories = document.getElementById("Dropdown").value
    let url = "https://api.chucknorris.io/jokes/" + (categories==="random"?"random":("random?category=") + categories);
    fetch(url).then((resp)=>{
      return resp.json();
    }).then(data=>{
      setjoke(data.value);
    }).catch((e)=>{
      console.log(e)
    })
  }

  let copyTextCallback = function ()
  {
    let JokeText = document.getElementById("JokeText");
    navigator.clipboard.writeText(JokeText.innerText);
  }


    return (
        <div className="App">
            <Title />
                <Button text='Carica Joke' callback={loadTextCallback}></Button>
                <JokeText id="JokeText">{joke}</JokeText>
                <Button id="Clipboard" text='Copia Joke' callback={copyTextCallback}></Button><br></br>
                <Dropdown id='Dropdown' values={category}></Dropdown>
        </div>
    )
}


export default App