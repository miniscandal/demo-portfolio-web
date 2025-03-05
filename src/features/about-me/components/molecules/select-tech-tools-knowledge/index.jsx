import { InputControl } from '@shared-atoms/input-control';

import './style.css';


function SelectTechToolsKnowledge({
    text = 'Label Select View Slider',
    htmlFor,
    groupName,
    defaultChecked
}) {

    return (
        <label className='select-tech-tools-knowledge'>
            {text}
            <InputControl
                htmlFor={htmlFor}
                groupName={groupName}
                defaultChecked={defaultChecked}
            />
        </label>
    );
}

export { SelectTechToolsKnowledge };
