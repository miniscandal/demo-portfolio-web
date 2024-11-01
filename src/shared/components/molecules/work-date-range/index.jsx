import { Time } from '@shared-atoms/time';

import './style.css';


function WorkDateRange({
    startYear,
    startMonth,
    endYear,
    endMonth,
    color = 'light'
}) {
    const classList = [
        color
    ].join(' ');
    const startTime = {
        year: startYear,
        month: startMonth,
        color: 'color-deep-ocean'
    }
    const endTime = {
        year: endYear,
        month: endMonth,
        color: 'color-deep-ocean'
    }

    return (
        <p className={`work-date-range ${classList}`}>
            <Time {...startTime} /> {'\u00a0'} - {'\u00a0'} <Time {...endTime} />
        </p>
    );
}

export { WorkDateRange };
