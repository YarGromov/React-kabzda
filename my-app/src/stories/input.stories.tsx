import React, {useState} from 'react';

export default {
    title: 'input'
}

export const UncontrolledInput = () => <input/>

export const TrackValueOfUncontrolledInput = () => {
    const [value, setValue] = useState('');
    return <><input onChange={(event)=>{
    setValue(event.currentTarget.value)
    }
    }/> - {value}</>
}


export const ControlledInput = () => <input value={'IT-Incubator'}/>