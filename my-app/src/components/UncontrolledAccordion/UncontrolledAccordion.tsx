import React, {useReducer, useState} from "react";


type UncontrolledAccordionPropsType = {
    titleValue: string
}

type ActionType = {
    type: string
}

const reduser = (state: boolean, action: ActionType) => {
    if(action.type === 'TOGGLE-COLLAPSED') {
        return !state;
    }

    return state;
}

export function UncontrolledAccordion(props: UncontrolledAccordionPropsType){

        // let [collapsed, setCollapsed] = useState(false);
        let [collapsed, dispatch] = useReducer(reduser, false);

    
        return(
            <div>
                {/*<AccordionTitle title={props.titleValue} onClick={()=>{setCollapsed(!collapsed)}}/>*/}
                <AccordionTitle title={props.titleValue} onClick={()=>{dispatch({type: 'TOGGLE-COLLAPSED'})}}/>

                {!collapsed && <AccordionBody/>}
            </div>
        )
    }



type AccordionTitlePropsType = {
    title: string
    onClick: () => void
}

function AccordionTitle(props: AccordionTitlePropsType){
    return(
            <h3 onClick={()=>{props.onClick()}}>{props.title}</h3>
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