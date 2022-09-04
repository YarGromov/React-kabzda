import React from 'react';
import './App.css';
import {Accordion} from "./components/Accordion/Accordion";
import {Rating} from "./components/Rating/Rating";

function App() {
  return (
    <div className="App">
        <PageTitle title={'This is APP component'}/>
        <PageTitle title={'This is LOL'}/>
        Article 1
        <Rating value={1}/>
        <Accordion titleValue={'Menu'} collapsed={true}/>
        <Accordion titleValue={'Menu 2'} collapsed={false}/>
        Article 2
        <Rating value={0}/>
        <Rating value={1}/>
        <Rating value={2}/>
        <Rating value={3}/>
        <Rating value={4}/>
        <Rating value={5}/>
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
