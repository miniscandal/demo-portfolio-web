import { Paragraph } from '@shared-atoms/paragraph';

import './style.css';


function InterpersonalCompetencyInformation({
    name: text = 'Interpersonal Competency'
}) {

    return (
        <div className='interpersonal-competency-information'>
            <Paragraph text={text} color='light' nowrap={true} />
        </div>
    );
}

export { InterpersonalCompetencyInformation };
