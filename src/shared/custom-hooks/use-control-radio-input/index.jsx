import { useContext, useState } from 'react';

import { PanelControlSliderContext } from '@feat-about-me-contexts/panel-control-slider';

import { RadioInput } from '@shared-atoms/radio-input';


function UseControlRadioInput() {
    const { radioInputsData, selectDefaultHtmlFor, groupName, LabelComponent } = useContext(PanelControlSliderContext);
    const [selectedRadioInput, setSelectedRadioInput] = useState(selectDefaultHtmlFor || radioInputsData[0].htmlFor);

    const radioInputComponents = radioInputsData.map((value, index) => {
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
