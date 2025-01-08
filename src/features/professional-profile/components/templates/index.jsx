import { ProfessionalProfileProvider } from '@feat-professional-profile-contexts/professional-profile';
import { AcquiredCompetencies } from '@feat-professional-profile-organisms/acquired-competencies';

import { Title } from '@shared-atoms/title';

import './style.css';


function ProfessionalProfile() {
    const title = {
        text: 'TECHNICAL COMPETENCIES AND EXPERTISE',
        color: 'charcoal-grey',
        type: 'h2',
        decorated: true
    };

    return (
        <section className='professional-profile'>
            <div className='professional-profile__div'>
                <Title {...title} />
            </div>
            <ProfessionalProfileProvider>
                <AcquiredCompetencies />
            </ProfessionalProfileProvider>
        </section>
    );
}


export { ProfessionalProfile };
