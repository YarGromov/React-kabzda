import React, {useMemo, useState} from "react";

export default {
    title: 'UseState demo'
}


function generateData() {
    //difficult counting
    console.log('generateData')
    return 1
}

export const Example1 = () => {
    console.log('Example')

    // const initValue = useMemo(generateData, []);

    const [counter, setCounter] = useState(generateData)

    // const changer = (state: number) => {
    //     return state + 1
    // }

    return <>
        <button onClick={() => {
            setCounter(state => state + 1)
        }}>+
        </button>
        {counter}
    </>
}