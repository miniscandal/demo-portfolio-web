import { CompetencyDescription } from '@feat-home-professional-profile-organisms/competency-description';
import { Title } from '@shared-atoms/title';
import { Computer } from '@shared-atoms/icon-font-svg/variants';
import { BroadcastOnHome } from '@shared-atoms/icon-font-svg/variants';
import { Terminal } from '@shared-atoms/icon-font-svg/variants';
import { EditNote } from '@shared-atoms/icon-font-svg/variants';
import { Database } from '@shared-atoms/icon-font-svg/variants';

import { EXPERIENCE_EDUCATIONAL_BACKGROUND } from '@shared-constants/anchor-id';

import { competencies } from '@shared-resources-data/professional-information/profile.json';

import './style.css';


function ProfessionalProfile() {
    const title = {
        text: 'PROFESSIONAL EXPERIENCE - EDUCATIONAL BACKGROUND',
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
        <section id={EXPERIENCE_EDUCATIONAL_BACKGROUND} className='professional-profile'>
            <Title {...title} />
            <section>
                {professionalCompetencies}
            </section>
        </section>
    );
}


export { ProfessionalProfile };
