import React from "react";
import {ClockViewPropsType} from "./Clock";

export const get2DigitString = (number: number) => number < 10 ? '0' + number : number


export const DigitalClockView: React.FC<ClockViewPropsType> = ({date}) => {
    return <> <span>{get2DigitString(date.getHours())}</span>
        :
        <span>{get2DigitString(date.getMinutes())}</span>
        :
        <span>{get2DigitString(date.getSeconds())}</span>
    </>
}