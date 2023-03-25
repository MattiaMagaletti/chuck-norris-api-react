import { useState } from 'react'
import Title from './components/Title'
import './styles/App.css'
import Button from './components/Button'


function App() {
    const [count, setCount] = useState(0)

    const [joke, setJoke] = useState("")

    let loadJOkeCallback = function(){
        console.log()
    }


    return (
        <div className="App">
            <h1>Chuck Norris API JOke Generator</h1>
            <p>Chuck</p>
            <div class="card">
                <button onClick={()  => setCount((count)  => count + 1)}>
                    count is {count}
                </button>

                <Button text="Carica Joke" callback={loadTextCallback}></Button>
                <Button text="Copia Joke" variant ={ joke === "" ? "disabled" : undefined } callback={copyTextCallback}></Button>
                <Button variant={ joke === "" ? "hover" : undefined } callback={loadtextCallBack}></Button>



            </div>
        </div>
    )
}


export default App