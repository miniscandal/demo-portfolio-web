import { RadioInputIndicator } from '@feat-about-me-atoms/radio-input-indicator';

import './style.css';


function RadioSelectionOption({
    htmlFor: id = 'radio-selection-option',
    checked = false,
    onChange = () => { }
}) {

    return (
        <label htmlFor={id} className='radio-selection-option'>
            <RadioInputIndicator checked={checked} />
            <input type='radio' id={id} onChange={() => onChange(id)} checked={checked} />
        </label>
    );
}

export { RadioSelectionOption };
