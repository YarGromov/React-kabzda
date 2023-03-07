import React, {useEffect, useState} from 'react';

export const TestUseEffect = () => {
    // -------componentDidMount componentDidUpdate
    //----------useEffect is called after the component is rendered
    // useEffect(()=>{
    //     console.log(document.querySelector('#target'))
    // })

    //--------useEffect is called 1 time
    // const [users, setUsers] = useState([])
    // const [search, setSearch] = useState('')
    // useEffect(()=>{
    //     fetch('/users?search=' + search)
    //         .then((response)=>response.json())
    //         .then((users)=>setUsers(users))
    // },[search])

    const [timer, setTimer] = useState(0)


//---------Clearing the interval
    useEffect(()=>{
      const flagInterval =  setInterval(()=>{
            console.log('fired')
            setTimer(timer + 1)
        }, 1000)
        return ()=> clearInterval(flagInterval)
    })


    return (
        <p id={'target'}>
            {timer}
        </p>
    );
};

