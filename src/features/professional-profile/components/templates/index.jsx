import { ProfessionalProfileProvider } from '@feat-professional-profile-contexts/professional-profile';
import { AcquiredCompetencies } from '@feat-professional-profile-organisms/acquired-competencies';

import { DecoratedTitle } from '@shared-molecules/decorated-title';

import './style.css';


function ProfessionalProfile() {
    const decoratedTitle = {
        text: 'TECHNICAL COMPETENCIES AND EXPERTISE',
        color: 'charcoal-grey'
    };

    return (
        <section className='professional-profile'>
            <div className='professional-profile__div'>
                <DecoratedTitle {...decoratedTitle} />
            </div>
            <ProfessionalProfileProvider>
                <AcquiredCompetencies />
            </ProfessionalProfileProvider>
        </section>
    );
}


export { ProfessionalProfile };
