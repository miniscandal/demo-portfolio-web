import { Time } from '@shared-atoms/time';

import './style.css';


function SelectEmploymentSummary({
    role = 'Select Employment Summary',
    employmentDuration,
    checked = false,
    children
}) {
    const classList = [
        checked ? 'checked' : ''
    ];
    const { start, end } = employmentDuration;

    return (
        <label className={`select-employment-summary ${classList.join(' ')}`}>
            {role}
            <div className='select-employment-summary__time'>
                <Time color='dark' size='small' {...start} /> - <Time color='dark' size='small' {...end} />
            </div>
            {children}
        </label>
    );
}

export { SelectEmploymentSummary };
