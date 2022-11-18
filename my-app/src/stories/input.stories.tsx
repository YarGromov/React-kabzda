import React, {ChangeEvent, useRef, useState} from 'react';
import {action} from "@storybook/addon-actions";

export default {
    title: 'input'
}


export const UncontrolledInput = () => <input/>

export const TrackValueOfUncontrolledInput = () => {
    const [value, setValue] = useState('');
    const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setValue(event.currentTarget.value)
    }
    return <><input onChange={onChangeHandler}/> - {value}</>
}

export const GetValueOfUncontrolledInputByButtonPress = () => {
    const [value, setValue] = useState('');
    const inputRef = useRef<HTMLInputElement>(null)
    const save = () => {
        const elem = inputRef.current as HTMLInputElement;
        setValue(elem.value)
    }

    return <><input ref={inputRef} id={'inputId'}/>
        <button onClick={save}>save</button>
        actual value: {value}</>
}

export const ControlledInput = () => {

    const [parentValue, setParentValue] = useState('')
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setParentValue(e.currentTarget.value)
    }

    return <input value={parentValue} onChange={onChangeHandler}/>
}


export const ControlledCheckbox = () => {
    const [parentValue, setParentValue] = useState(true)

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setParentValue(e.currentTarget.checked)
    }

    return <input type={"checkbox"} checked={parentValue} onChange={onChangeHandler}/>

}
export const ControlledSelect = () => {
    const [city, setCity] = useState<string | undefined>('4')

    const onChangeSelectHandler = (e: ChangeEvent<HTMLSelectElement>) => {
        setCity(e.currentTarget.value)
    }

   return <select value={city} onChange={onChangeSelectHandler}>
       <option value="1">Minsk</option>
       <option value="2">Moscow</option>
       <option value="3">Kiev</option>
       <option value="4">Warsaw</option>
   </select>
}
