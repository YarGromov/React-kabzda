import React, {useState} from 'react';
import './App.css';
import {Accordion} from "./components/Accordion/Accordion";
import {Rating, RatingValueType} from "./components/Rating/Rating";
import {OnOff} from "./components/OnOff/OnOff";
import {UncontrolledAccordion} from "./components/UncontrolledAccordion/UncontrolledAccordion";
import {UncontrolledRating} from "./components/UncontrolledRating/UncontrolledRating";
import {UncontrolledOnOff} from "./components/UncontrolledOnOff/UncontrolledOnOff";
import {Counter} from "./components/Counter/Counter";

function App() {

    let [ratingValue, setRatingValue] = useState<RatingValueType>(2)

    let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false)

    let [switchOn, setSwitchOn] = useState<boolean>(false)

  return (
    <div className="App">


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
        <Counter/>


    </div>
  );
}

type PageTitlePropsType = {
    title: string
}

function PageTitle(props: PageTitlePropsType){
    return <h1>
        {props.title}
    </h1>
}

export default App;
