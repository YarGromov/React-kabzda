import React, {useEffect, useState} from 'react';
import './App.css';
import {Rating, RatingValueType} from "./components/Rating/Rating";
import {NavLink, Routes, Route, useParams, useNavigate, Navigate, useSearchParams} from "react-router-dom";
import {TestUseMemo} from "./components/Test/TestUseMemo";
import {TestUseCallback} from "./components/Test/TestUseCallback";
import {TestUseEffect} from "./components/Test/TestUseEffect";

function App() {

    let [ratingValue, setRatingValue] = useState<RatingValueType>(2)

    let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false)

    let [switchOn, setSwitchOn] = useState<boolean>(false)

    const Profile = () => {
        const [searchParams, setSearchParams] = useSearchParams();
        console.log(searchParams.get('name'));
        console.log(Object.fromEntries(searchParams));

        useEffect(()=>{
            console.log('research...');
        }, [searchParams])


        return (
            <div>
                profile
                <button onClick={()=>{setSearchParams({age: '32'})}}>add age</button>
            </div>
        )
    }

    return (
        <div className="App">
            <TestUseEffect/>
        </div>
    );
}

type PageTitlePropsType = {
    title: string
}

function PageTitle(props: PageTitlePropsType) {
    return <h1>
        {props.title}
    </h1>
}

export default App;
