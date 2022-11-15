import React, {ChangeEvent, useRef, useState} from 'react';

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

export const ControlledInput = () => <input value={'IT-Incubator'}/>