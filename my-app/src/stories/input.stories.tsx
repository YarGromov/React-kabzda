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
    const onChangeHandler =(e: ChangeEvent<HTMLInputElement>)=>{setParentValue(e.currentTarget.value)}

    return <input value={parentValue} onChange={onChangeHandler}/>
}


export const ControlledCheckbox = () => {
    const [parentValue, setParentValue] = useState(true)

    const onChangeHandler =(e: ChangeEvent<HTMLInputElement>)=>{
        setParentValue(e.currentTarget.checked)
    }

    return <input type={"checkbox"} checked={parentValue} onChange={onChangeHandler}/>

}
export const ControlledSelect = () => {

}
