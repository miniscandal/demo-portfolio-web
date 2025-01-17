import { ProfessionalProfileProvider } from '@feat-professional-profile-contexts/professional-profile';

import { Header } from '@feat-professional-profile-organisms/header';
import { AcquiredCompetencies } from '@feat-professional-profile-organisms/acquired-competencies';

import './style.css';


function ProfessionalProfile() {

    return (
        <section className='professional-profile'>
            <div className='professional-profile__div'>
                <Header />
            </div>
            <ProfessionalProfileProvider>
                <AcquiredCompetencies />
            </ProfessionalProfileProvider>
        </section>
    );
}


export { ProfessionalProfile };
