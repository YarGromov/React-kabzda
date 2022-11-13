import React, {useState} from 'react';
import './App.css';
import {Accordion} from "./components/Accordion/Accordion";
import {Rating, RatingValueType} from "./components/Rating/Rating";
import {OnOff} from "./components/OnOff/OnOff";
import {UncontrolledAccordion} from "./components/UncontrolledAccordion/UncontrolledAccordion";
import {UncontrolledRating} from "./components/UncontrolledRating/UncontrolledRating";
import {UncontrolledOnOff} from "./components/UncontrolledOnOff/UncontrolledOnOff";
import {Counter} from "./components/Counter/Counter";
import {NavLink, Routes, Route, useParams} from "react-router-dom";

function App() {

    let [ratingValue, setRatingValue] = useState<RatingValueType>(2)

    let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false)

    let [switchOn, setSwitchOn] = useState<boolean>(false)

    const Profile = () => {
        const params = useParams<'*'>()
        const some = params["*"];
        console.log(some)
        return <div>frofile</div>
    }

    return (
        <div className="App">


            <NavLink to={'/'}>main</NavLink>---
            <NavLink to={'/login'}>login</NavLink>---
            <NavLink
                to={'/frofile'}
                style={(params)=> {
                    return  { color: params.isActive ? 'lime' : 'black'}
                }}
            >frofile</NavLink>---
            <NavLink to={'/frofile/settings'}>settings</NavLink>---
            <a href="https://www.udemy.com/course/javascript_full/learn/lecture/28490428#overview"
               target={'_blank'}
               rel={'noreferrer nofollow noopenner'}
            >
                ---xxx---
            </a>

            <Routes>
                <Route path={'/*'} element={<div>404</div>}/>
                <Route path={'/'} element={<div>main</div>}/>
                <Route path={'/login'} element={<div>login</div>}/>
                <Route path={'/frofile'} element={<div>frofile</div>}/>
                <Route path={'/frofile/settings'} element={<div>settings</div>}/>
            </Routes>

            {/*<UncontrolledOnOff onChange={setSwitchOn}/> {switchOn.toString()}*/}

            {/*<OnOff on={switchOn} onChange={setSwitchOn}/>*/}
            {/*<Accordion titleValue={'Menu 2'}*/}
            {/*           collapsed={accordionCollapsed}*/}
            {/*           onChange={()=> {*/}
            {/*               setAccordionCollapsed(!accordionCollapsed)*/}
            {/*           }}*/}
            {/*/>*/}

            {/*<UncontrolledAccordion titleValue={"Menu"}/>*/}
            {/*<Rating value={ratingValue} onClick={setRatingValue}/>*/}
            {/*<UncontrolledRating/>*/}
            {/*<Counter/>*/}


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
