import { useState } from 'react';

import { RadioInput } from '@shared-atoms/radio-input';


function UseControlRadioInput({
    labelData = [],
    groupName,
    selectDefaultHtmlFor,
    LabelComponent
}) {
    const [selectedRadioInput, setSelectedRadioInput] = useState(selectDefaultHtmlFor);

    const radioInputComponents = labelData.map((value, index) => {
        const { htmlFor } = value;
        const checked = selectedRadioInput === htmlFor;


        return (
            <LabelComponent
                key={`${htmlFor}-${groupName}-${index}`}
                checked={checked}
                htmlFor={htmlFor}
                {...value}
            >
                <RadioInput
                    htmlFor={htmlFor}
                    groupName={groupName}
                    onChange={setSelectedRadioInput}
                    checked={checked}
                />
            </LabelComponent>
        );
    });


    return {
        selectedRadioInput,
        radioInputComponents
    };
}

export { UseControlRadioInput };
