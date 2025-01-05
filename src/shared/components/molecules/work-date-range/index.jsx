import { Paragraph } from '@shared-atoms/paragraph';
import { Time } from '@shared-atoms/time';

import './style.css';


function WorkDateRange({
    employmentDuration = {
        start: {
            year: 1590,
            month: 2
        },
        end: {
            year: 3503,
            month: 9
        }
    },
    color = 'light'
}) {
    const { start, end } = employmentDuration;
    const paragraph = {
        color
    };
    const timeStart = {
        color,
        start
    };
    const timeEnd = {
        color,
        end
    };

    return (
        <Paragraph {...paragraph}>
            <Time {...timeStart} /> {'\u00a0'} - {'\u00a0'} <Time {...timeEnd} />
        </Paragraph>
    );
}

export { WorkDateRange };
