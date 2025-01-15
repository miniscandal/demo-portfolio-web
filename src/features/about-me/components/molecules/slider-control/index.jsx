import { useState } from 'react';

import { SliderOption } from '@feat-about-me-atoms/slider-button';

import './style.css';


function SliderControl({
    sliderOptions = ['slider-option'],
    selectDefault = 'slider-option'
}) {
    const [selectOption, setSelectOption] = useState(selectDefault);

    const componentsSliderOption = sliderOptions.map((option, index) => {
        const props = {
            id: option,
            checked: selectOption === option,
            onChange: setSelectOption
        };

        return (
            <div key={`id-${index}`} className='slider-control__div'>
                <SliderOption {...props} />
            </div>
        );
    });


    return (
        <section className='slider-control'>
            {componentsSliderOption}
        </section>
    );
}

export { SliderControl };
