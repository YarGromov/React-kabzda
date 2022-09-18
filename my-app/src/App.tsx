import React, {useState} from 'react';
import './App.css';
import {Accordion} from "./components/Accordion/Accordion";
import {Rating, RatingValueType} from "./components/Rating/Rating";
import {OnOff} from "./components/OnOff/OnOff";
import {UncontrolledAccordion} from "./components/UncontrolledAccordion/Accordion";
import {UncontrolledRating} from "./components/UncontrolledRating/UncontrolledRating";

function App() {

    let [ratingValue, setRatingValue] = useState<RatingValueType>(2)

  return (
    <div className="App">

        <Rating value={ratingValue} onClick={setRatingValue}/>


        {/*<OnOff/>*/}
        {/*<Accordion titleValue={'Menu 2'} collapsed={false}/>*/}

        {/*<UncontrolledAccordion titleValue={"Menu"}/>*/}
        {/*<UncontrolledRating/>*/}
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
