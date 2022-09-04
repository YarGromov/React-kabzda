import React from "react";


type AccordionPropsType = {
    titleValue: string
    collapsed: boolean
}


export function Accordion(props: AccordionPropsType){
    if(props.collapsed) {
        return(
            <div>
                <AccordionTitle title={props.titleValue}/>
            </div>
        )
    } else {
        return(
            <div>
                <AccordionTitle title={props.titleValue}/>
                <AccordionBody/>
            </div>
        )
    }
}

function Accordion1(props: AccordionPropsType){
        return(
            <div>
                <AccordionTitle title={props.titleValue}/>
                {!props.collapsed && <AccordionBody/>}
            </div>
        )
    }


type AccordionTitlePropsType = {
    title: string
}

function AccordionTitle(props: AccordionTitlePropsType){
    return(
            <h3>{props.title}</h3>
    )
}

function AccordionBody(){
    return(
            <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
            </ul>
    )
}