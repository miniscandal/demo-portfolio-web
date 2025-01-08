import { useContext } from 'react';

import { ProfessionalProfileContext } from '@feat-professional-profile-contexts/professional-profile';

import { CompetencyProfessional } from '@feat-professional-profile-organisms/competency-professional';

import './style.css';


function AcquiredCompetencies() {
    const competencies = useContext(ProfessionalProfileContext);

    const competencyDescriptions = competencies.map((value, index) => {
        const { name } = value;

        return (
            <div key={`${index}-${name}`}>
                <CompetencyProfessional {...value} />
            </div>
        );
    });

    return (
        <section className='acquired-competencies'>
            {competencyDescriptions}
        </section>
    );
}

export { AcquiredCompetencies };
