import { useState } from 'react';

import { RadioSelectionOption } from '@feat-about-me-molecules/radio-selection-option';

import './style.css';


function SliderControl({
    selectionOptions = [{
        htmlFor: 'option-01'
    }],
    defaultSelectionOption = 'option-01',
    Component = RadioSelectionOption
}) {
    const [selectOption, setSelectOption] = useState(defaultSelectionOption);

    const componentsSliderOption = selectionOptions.map((option, index) => {
        const { htmlFor } = option;
        const props = {
            ...option,
            checked: selectOption === htmlFor,
            onChange: setSelectOption
        };

        return <Component key={`id-${index}`} {...props} />;
    });


    return (
        <section className='slider-control'>
            {componentsSliderOption}
        </section>
    );
}

export { SliderControl };
