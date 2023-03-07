import React, {useCallback, useEffect, useMemo, useState} from 'react';

function createUser(name: string, surname: string){
    const user = {name, surname}
    console.log(user)
    return user
}

export const TestUseCallback = () => {
    const [message, setMessage] = useState('Hello everybody!')
    const [counter, setCounter] = useState(0)

    const greeting = useCallback ((text: string) => {
        console.log(text)
    }, [])



    useEffect(()=>{

        greeting(message)
    }, [greeting, message])

    return (
        <button onClick={()=>setCounter(counter + 1)}>На меня нажали {counter} раз</button>
    );
};
