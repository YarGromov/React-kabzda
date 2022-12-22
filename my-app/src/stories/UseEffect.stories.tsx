import React, {useEffect, useState} from 'react';

export default {
    title: 'useEffect demo'
}

export const SimpleExample = () => {
    const [counter, setCounter] = useState(1);
    console.log('SimpleExample')

        useEffect(()=>{
            console.log('useEffect')
            //api.getUsers().then('')
            //setInterval
            //indexedDB
            //document.getElementId
            //document.title = 'User'
        })

    return (
        <div>
            Hello, {counter}
            <button onClick={()=> setCounter(counter + 1)}>+</button>
        </div>
    );
};

