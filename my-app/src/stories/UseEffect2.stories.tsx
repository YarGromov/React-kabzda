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

     const timeoutID = setTimeout(()=>{
            console.log('TIMEOUT EXPIRED')
            setText('3 seconds passed')

        }, 3000)


        return ()=>{
        clearTimeout(timeoutID)
        }
    }, [text])

    return <>
        text: {text}
    </>
}

//26


