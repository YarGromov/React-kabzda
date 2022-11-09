import React, {useEffect, useState} from 'react';

export const Counter = () => {

    let [value, setValue] = useState(0)


    useEffect(()=>{
        let valueAsString = localStorage.getItem('CounterValue');
        if (valueAsString) {
            let newValue = JSON.parse(valueAsString)
            setValue(newValue)
        }
    }, [])

    useEffect(()=>{
        localStorage.setItem('CounterValue', JSON.stringify(value))
    }, [value])


    const incHandler = () => {
        setValue(value + 1)
    }

    // const setToLocalStorageHandler = () => {
    //     localStorage.setItem('CounterValue', JSON.stringify(value))
    //     // localStorage.setItem('CounterValue + 1', JSON.stringify(value + 1))
    // }

    const getFromLocalStorageHandler = () => {
        let valueAsString = localStorage.getItem('CounterValue');
        if (valueAsString) {
            let newValue = JSON.parse(valueAsString)
            setValue(newValue)
        }
    }

    // const clearLocalStorageHandler = () => {
    //     localStorage.clear()
    //     setValue(0)
    // }
    //
    // const removeItemFromLocalStorageHandler = () => {
    //     localStorage.removeItem('CounterValue + 1')
    // }

    return (
        <div>
            <h1>{value}</h1>
            <button onClick={incHandler}>inc</button>
            {/*<button onClick={setToLocalStorageHandler}>setToLocalStorage</button>*/}
            {/*<button onClick={getFromLocalStorageHandler}>getFromLocalStorage</button>*/}
            {/*<button onClick={clearLocalStorageHandler}>clearLocalStorage</button>*/}
            {/*<button onClick={removeItemFromLocalStorageHandler}>removeItemFromLocalStorage</button>*/}
        </div>
    );
};

