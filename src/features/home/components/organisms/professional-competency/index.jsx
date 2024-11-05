import { Title } from '@shared-atoms/title';
import { Paragraph } from '@shared-atoms/paragraph';
import { DataBaseIcon } from '@shared-atoms/ico-font/database';

import './style.css';


function ProfessionalCompetency({ iconSrc, title, text }) {

    return (
        <section className='professional-competency'>
            <DataBaseIcon />
            <div>
                <Title />
                <Paragraph />
            </div>
        </section>
    );
}

export { ProfessionalCompetency };
