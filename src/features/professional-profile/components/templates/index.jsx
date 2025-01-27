import { DecoratedTitle } from '@shared-molecules/decorated-title';

import { AcquiredCompetencies } from '@feat-professional-profile-organisms/acquired-competencies';

import './style.css';


function ProfessionalProfile() {
    const decoratedTitle = {
        text: 'PROFESSIONAL PROFILE',
        color: 'charcoal-grey'
    };

    return (
        <section className='professional-profile'>
            <header>
                <DecoratedTitle {...decoratedTitle} />
            </header>
            <section>
                <AcquiredCompetencies />
            </section>
        </section>
    );
}


export { ProfessionalProfile };
