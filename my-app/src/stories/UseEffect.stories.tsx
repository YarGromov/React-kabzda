import React, {useEffect, useState} from 'react';

export default {
    title: 'useEffect demo'
}

export const SimpleExpample = () => {
    const [fake, setFake] = useState(1)
    const [counter, setCounter] = useState(1)
    console.log('SimpleExapmle')

    useEffect(()=>{
        console.log('UseEffect every render 1')
        document.title = counter.toString()
    })

    useEffect(()=>{
        console.log('UseEffect only first render 2')
        document.title = counter.toString()
    }, [])

    useEffect(()=>{
        console.log('UseEffect first render and every counter change 3')
        document.title = counter.toString()
    }, [counter])

    return <>
        Hello, {counter} {fake}
        <button  onClick={ () => setCounter(counter + 1)} > Counter+ </button>
        <button  onClick={ () => setFake(fake + 1)} > Fake+ </button>
    </>
}

export const SetIntervalExpample = () => {
    const [fake, setFake] = useState(1)
    const [counter, setCounter] = useState(1)
    console.log('SetTimeoutExpample')

    useEffect(()=>{

        // setTimeout(()=>{
        //     console.log('SetTimeout')
        //     document.title = counter.toString()
        // },1000)

       const interval = setInterval(()=>{
            console.log('Tick ' + counter)
            setCounter(counter + 1)
        },1000)

        return ()=>{
            clearInterval(interval)
        }

    },[])



    return <>
        Hello, Counter: {counter} Fake: {fake}
        {/*<button  onClick={ () => setCounter(counter + 1)} > Counter+ </button>*/}
        {/*<button  onClick={ () => setFake(fake + 1)} > Fake+ </button>*/}
    </>
}

export const ResetEffectExpample2 = () => {

    const [counter, setCounter] = useState(1)
    console.log('Component rendered with ' + counter)


    useEffect(()=>{
        console.log('Effect occurred: ' + counter)

        return ()=>{
            console.log('RESET EFFECT ' + counter)
        }
    },[counter])

    const increase = () => {setCounter(counter + 1) }

    return <>
        Hello, Counter: {counter} <button onClick={increase}>+</button>

    </>
}

export const KeysTackerExample = () => {

    const [text, setText] = useState('')

    console.log('Component rendered with ' + text)


    useEffect(()=>{

        const handler = (e:  KeyboardEvent)=>{
            console.log(e.key);
            setText((state)=> state + e.key)
        }

       window.addEventListener('keypress', handler)


        return () => {
            window.removeEventListener('keypress', handler)
        }
    },[])


    return <>
        Typed text: {text}
    </>
}