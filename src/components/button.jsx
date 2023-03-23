import {useState} from 'react'
import '../styles/Button.css'

function Button ({ text, variant, callback})
{
    let classRenderer = function(){
        let classes = [
            'Button', 'text-center', 'align-left', variant
        ]

        return classes.join(" ")
    }

    let clickHandler



    return (
        <div className={classRenderer()}>
            { text }
        </div>
    )
}

export default Button