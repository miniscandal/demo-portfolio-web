import { Time } from '@shared-atoms/time';
import { InputControl } from '@shared-atoms/input-control';

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
            <InputControl
                htmlFor={htmlFor}
                groupName={groupName}
                defaultChecked={defaultChecked}
            />
        </label>
    );
}

export { SelectEmploymentSummary };
