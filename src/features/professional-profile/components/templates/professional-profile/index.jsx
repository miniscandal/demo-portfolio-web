import { DecoratedTitle } from '@shared-molecules/decorated-title';

import { AcquiredCompetencies } from '@feat-professional-profile-organisms/acquired-competencies';

import './style.css';


function ProfessionalProfile() {

    return (
        <section className='professional-profile'>
            <DecoratedTitle text='PROFESSIONAL PROFILE' />
            <article>
                <AcquiredCompetencies />
            </article>
        </section>
    );
}


export { ProfessionalProfile };
