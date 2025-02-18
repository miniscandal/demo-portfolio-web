import { Paragraph } from '@shared-atoms/paragraph';

import './style.css';


function InterpersonalCompetencyInformation({
    name = 'Interpersonal Competency'
}) {

    return (
        <div className='interpersonal-competency-information'>
            <Paragraph text={name} nowrap={true} />
        </div>
    );
}

export { InterpersonalCompetencyInformation };
