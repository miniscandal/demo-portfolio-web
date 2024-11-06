import { CompetencyDescription } from '@feat-home-professional-profile-organisms/competency-description';
import { Title } from '@shared-atoms/title';
import { Computer } from '@shared-atoms/icon-font-svg/variants';
import { BroadcastOnHome } from '@shared-atoms/icon-font-svg/variants';
import { Terminal } from '@shared-atoms/icon-font-svg/variants';
import { EditNote } from '@shared-atoms/icon-font-svg/variants';
import { Database } from '@shared-atoms/icon-font-svg/variants';

import { competencies } from '@shared-resources-data/professional-information/profile.json';

import './style.css';


function ProfessionalProfile() {
    const title = {
        text: 'What I Do',
        color: 'charcoal-grey',
        type: 'h2',
        decorated: true
    };

    const {
        computerSystemEngineering,
        internetOfThings, softwareDeveloper,
        functionalAnalyst,
        databaseAdministration
    } = competencies;

    const competenciesData = [
        {
            name: computerSystemEngineering.name,
            description: computerSystemEngineering.descriptionEnglish,
            iconFontSvg: Computer,
        },
        {
            name: internetOfThings.name,
            description: internetOfThings.descriptionEnglish,
            iconFontSvg: BroadcastOnHome,
        },
        {
            name: softwareDeveloper.name,
            description: softwareDeveloper.descriptionEnglish,
            iconFontSvg: Terminal,
        },
        {
            name: functionalAnalyst.name,
            description: functionalAnalyst.descriptionEnglish,
            iconFontSvg: EditNote,
        },
        {
            name: databaseAdministration.name,
            description: databaseAdministration.descriptionEnglish,
            iconFontSvg: Database,
        },
    ];
    const professionalCompetencies = competenciesData.map((value, index) => {

        return (
            <CompetencyDescription key={`${index}-${value.titleText}`} {...value} />
        );
    });

    return (
        <section className='professional-profile'>
            <Title {...title} />
            <section>
                {professionalCompetencies}
            </section>
        </section>
    );
}


export { ProfessionalProfile };
