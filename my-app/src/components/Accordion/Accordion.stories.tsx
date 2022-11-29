import React, {useState} from 'react';
import {Accordion} from "./Accordion";
import {action} from "@storybook/addon-actions";

export default {
    title: "Accordion",
    compopnent: Accordion
}

const callback = action('Accordion mode change event fired');
const onClickCallback = action('Some item was clicked');

export const MenuCollapsedMode = () => <Accordion onClick={onClickCallback} titleValue={'Menu'} collapsed={true} onChange={callback} items={[]}/>
export const UsersUnCollapsedMode = () => <Accordion onClick={onClickCallback} titleValue={'Users'} collapsed={false} onChange={callback} items={[{title: 'Dimych', value: 1},{title: 'Pasha', value: 2}, {title: 'Viktor', value: 3}, {title: 'Artem', value: 4}]}/>

export const ModeChanging = () => {
    const [value, setValue] = useState<boolean>(true);
    return <Accordion onClick={(id)=>{alert(`User with ID ${id} clicked`)}} titleValue={'Users'} collapsed={value} onChange={()=>setValue(!value)} items={[{title: 'Dimych', value: 1},{title: 'Pasha', value: 2}, {title: 'Viktor', value: 3}, {title: 'Artem', value: 4}]}/>
}