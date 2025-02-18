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
    }
}) {
    const { start, end } = employmentDuration;

    return (
        <Paragraph>
            <Time {...start} /> {'\u00a0'} - {'\u00a0'} <Time {...end} />
        </Paragraph>
    );
}

export { WorkDateRange };
