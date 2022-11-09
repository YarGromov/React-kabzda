import React, {useState} from 'react';

export const Counter = () => {

    let [value, setValue] = useState(0)

    const incHandler = () => {
        setValue(value + 1)
    }

    const setToLocalStorageHandler = () => {
        localStorage.setItem('CounterValue', JSON.stringify(value))
    }

    const getFromLocalStorageHandler = () => {
        let valueAsString = localStorage.getItem('CounterValue');
        if (valueAsString) {
            let newValue = JSON.parse(valueAsString)
            setValue(newValue)
        }
    }

    return (
        <div>
            <h1>{value}</h1>
            <button onClick={incHandler}>inc</button>
            <button onClick={setToLocalStorageHandler}>setToLocalStorage</button>
            <button onClick={getFromLocalStorageHandler}>getFromLocalStorage</button>
        </div>
    );
};

