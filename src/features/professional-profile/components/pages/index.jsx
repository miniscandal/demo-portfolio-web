import { CompetencyDescription } from '@feat-professional-profile-organisms/competency-description';
import { Title } from '@shared-atoms/title';
import { Computer } from '@shared-atoms/icon-font-svg/variants';
import { BroadcastOnHome } from '@shared-atoms/icon-font-svg/variants';
import { Terminal } from '@shared-atoms/icon-font-svg/variants';
import { EditNote } from '@shared-atoms/icon-font-svg/variants';
import { Database } from '@shared-atoms/icon-font-svg/variants';

import { en as competencies } from '@shared-resources-data/professional-information/technical-competencies-expertise.json';

import './style.css';


function ProfessionalProfile() {
    const title = {
        text: 'TECHNICAL COMPETENCIES AND EXPERTISE',
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
            enabled: true
        },
        {
            name: internetOfThings.name,
            description: internetOfThings.descriptionEnglish,
            iconFontSvg: BroadcastOnHome,
            enabled: true
        },
        {
            name: softwareDeveloper.name,
            description: softwareDeveloper.descriptionEnglish,
            iconFontSvg: Terminal,
            enabled: true
        },
        {
            name: functionalAnalyst.name,
            description: functionalAnalyst.descriptionEnglish,
            iconFontSvg: EditNote,
            enabled: true
        },
        {
            name: databaseAdministration.name,
            description: databaseAdministration.descriptionEnglish,
            iconFontSvg: Database,
            enabled: false
        },
    ];
    const professionalCompetencies = competenciesData.map((value, index) => {
        const { name, enabled } = value;

        if (!enabled) {
            return;
        }

        return (
            <CompetencyDescription key={`${index}-${name}`} {...value} />
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
