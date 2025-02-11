import { technologicalToolsData } from '@core-services-api-rest-github-profile/data/resource-data-glossaries';
import { technologicalKnowledgeData } from '@core-services-api-rest-github-profile/data/resource-data-glossaries';
import { socialEmotionalCompetenciesData } from '@core-services-api-rest-github-profile/data/resource-data-glossaries';

import { PanelControlSliderProvider } from '@feat-about-me-contexts/panel-control-slider';
import { TempLineWorkExperience } from '@feat-work-experience-history-organisms/temp-line-work-experience';
import { SelectEmploymentSummary } from '@feat-work-experience-history-molecules/select-employment-summary';

import { DecoratedTitle } from '@shared-molecules/decorated-title';

import './style.css';


function WorkExperienceHistory() {
    const dataGlossaries = {
        technologicalToolsData,
        technologicalKnowledgeData,
        socialEmotionalCompetenciesData
    };
    const Provider = {
        radioInputsData: [
            { htmlFor: '01-C' },
            { htmlFor: '02-B' },
            { htmlFor: '03-D' }
        ],
        selectDefaultHtmlFor: '01-C',
        groupName: 'work-experience-history',
        LabelComponent: SelectEmploymentSummary
    };


    return (
        <article className='work-experience-history'>
            <header>
                <DecoratedTitle text='WORK EXPERIENCE' color='charcoal-grey' />
            </header>
            <section>
                <PanelControlSliderProvider Provider={Provider}>
                    <TempLineWorkExperience dataGlossaries={dataGlossaries} />
                </PanelControlSliderProvider>
            </section>
        </article>
    );
}

export { WorkExperienceHistory };
