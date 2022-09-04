import React, {useState} from "react";


type UncontrolledAccordionPropsType = {
    titleValue: string
    // collapsed: boolean
}


export function UncontrolledAccordion(props: UncontrolledAccordionPropsType){

    let [collapsed, setCollapsed] = useState(true);

    const coll = () => {
        setCollapsed(!collapsed)
    }

        return(
            <div>
                <AccordionTitle title={props.titleValue}/> <button onClick={()=>{coll()}}>COLLAPSED</button>

                {!collapsed && <AccordionBody/>}
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