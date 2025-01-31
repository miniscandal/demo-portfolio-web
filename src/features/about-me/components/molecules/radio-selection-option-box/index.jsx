import { RadioInputIndicator } from '@feat-about-me-atoms/radio-input-indicator';

import './style.css';


function RadioSelectionOptionBox({
    htmlFor: id = 'radio-selection-option-box',
    text = 'Radio Selection Option Box',
    checked = false,
    onChange = () => { },
}) {
    const radioInputIndicator = {
        checked
    };


    return (
        <label htmlFor={id} className='radio-selection-option-box'>
            <div className='radio-selection-option-box__div'>
                <RadioInputIndicator {...radioInputIndicator} />
            </div>
            {text}
            <input type='radio' id={id} onChange={() => onChange(id)} checked={checked} />
        </label>
    );
}

export { RadioSelectionOptionBox };
