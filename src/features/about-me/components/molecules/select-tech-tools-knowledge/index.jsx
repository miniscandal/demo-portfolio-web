import { RadioInput } from '@shared-atoms/radio-input';

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
            <RadioInput
                htmlFor={htmlFor}
                groupName={groupName}
                defaultChecked={defaultChecked}
            />
        </label>
    );
}

export { SelectTechToolsKnowledge };
