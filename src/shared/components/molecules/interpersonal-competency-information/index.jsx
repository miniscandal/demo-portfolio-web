import { Paragraph } from '@shared-atoms/paragraph';

import './style.css';


function InterpersonalCompetencyInformation({
    name: text = 'Interpersonal Competency'
}) {
    const paragraph = {
        text,
        color: 'light',
        nowrap: true
    };

    return (
        <div className='interpersonal-competency-information'>
            <Paragraph {...paragraph} />
        </div>
    );
}

export { InterpersonalCompetencyInformation };
