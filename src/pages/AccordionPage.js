import React from 'react';
import Accordion from '../components/Accordion';
function AccordionPage() {
    const items = [
        {
            id: 'cvb',
            label: 'can I use React on a project' ,
            content: ' you can use any react on Project'
        },
        {
            id: 'hg',
            label: 'Can i use Javascript on a project',
            content: 'you can use any Javascript on Project'
        },
        {
            id: 'kjhg',
            label: 'Can I use CSS on a project',
            content: 'you can use any CSS on Project'
        }
    ]
return (<Accordion items={items}/>)
}

export default AccordionPage;