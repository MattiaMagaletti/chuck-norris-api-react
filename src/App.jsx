import { useState } from 'react'
import Title from './components/Title'
import './styles/App.css'
import Button from './components/Button'


function App() {
    const [count, setCount] = useState(0)

    const [joke, setJoke] = useState("")

    let loadTextCallback = function(){
        console.log()
    }

    let copyTextCallback = function(){
        console.log()
    }


    return (
        <div className="App">
            <Title />
                <Button text="Carica Joke" callback={loadTextCallback}></Button>
                <Button text="Copia Joke" variant ={ joke === "" ? "disabled" : undefined } callback={copyTextCallback}></Button>
                <Button variant={ joke === "" ? "hover" : undefined } callback={loadTextCallback}></Button>
        </div>
    )
}


export default App