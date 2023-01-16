import React, {useEffect, useState} from 'react';

type PropsType = {}


const get2DigitString = (number: number) => number < 10 ? '0' + number : number

export const Clock: React.FC<PropsType> = () => {

    const [date, setDate] = useState(new Date())

    useEffect(() => {

        const intervalID = setInterval(() => {
            console.log('tick')
            setDate(new Date())
        }, 1000)

        return ()=>{
            clearInterval(intervalID)
        }
    }, [])

    return (
        <div>
            <span>{get2DigitString(date.getHours())}</span>
            :
            <span>{get2DigitString(date.getMinutes())}</span>
            :
            <span>{get2DigitString(date.getSeconds())}</span>

        </div>
    );
};
