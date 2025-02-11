import { DecoratedTitle } from '@shared-molecules/decorated-title';

import { AcquiredCompetencies } from '@feat-professional-profile-organisms/acquired-competencies';

import './style.css';


function ProfessionalProfile() {

    return (
        <section className='professional-profile'>
            <header>
                <DecoratedTitle text='PROFESSIONAL PROFILE' color='charcoal-grey' />
            </header>
            <section>
                <AcquiredCompetencies />
            </section>
        </section>
    );
}


export { ProfessionalProfile };
