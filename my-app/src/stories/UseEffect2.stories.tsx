import React, {useEffect, useState} from 'react';

export default {
    title: 'useEffect demo'
}

export const ResetEffectExapmle = () => {
    const [counter, setCounter] = useState(1)
    console.log('Component rendered: ' + counter)

    useEffect(() => {
        console.log('Effect occured: ' + counter)

        return () => {
            console.log("RESET EFFECT " + counter)
        }
    }, [counter])

    const increase = () => setCounter(counter + 1)
    return <>
        Hello, counter: {counter}
        <button onClick={increase}>+</button>
    </>
}

export const KeysTrackerExapmle = () => {
    const [text, setText] = useState('')
    console.log('Component rendered: ' + text)

    useEffect(() => {

        const handler = (e: KeyboardEvent)=>{
            console.log(e.key)
            setText((state)=> state + e.key)
        }

        window.addEventListener("keypress", handler )

        return ()=>{
            window.removeEventListener('keypress',handler )
        }
    }, [])

    return <>
       Typed text: {text}
    </>
}

//26


