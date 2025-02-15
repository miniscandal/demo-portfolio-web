import { Time } from '@shared-atoms/time';
import { RadioInput } from '@shared-atoms/radio-input';

import './style.css';


function SelectEmploymentSummary({
    role = 'Select Employment Summary',
    employmentDuration,
    htmlFor,
    groupName,
    defaultChecked
}) {
    const { start, end } = employmentDuration;

    return (
        <label className='select-employment-summary'>
            {role}
            <div className='select-employment-summary__time'>
                <Time color='dark' size='small' {...start} /> - <Time color='dark' size='small' {...end} />
            </div>
            <RadioInput
                htmlFor={htmlFor}
                groupName={groupName}
                defaultChecked={defaultChecked}
            />
        </label>
    );
}

export { SelectEmploymentSummary };
