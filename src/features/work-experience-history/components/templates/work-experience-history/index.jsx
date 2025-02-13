import { useContext } from 'react';

import { WorkExperienceTimelineContext } from '@feat-work-experience-history-contexts/work-experience-timeline';
import { ContentVisibilityControllerProvider } from '@shared-contexts/content-visibility-controller';

import { WorkExperienceProvider } from '@feat-work-experience-history-contexts/work-experience';

import { EmploymentSummary } from '@feat-work-experience-history-organisms/employment-summary';

import { ContentVisibilityController } from '@shared-organisms/content-visibility-controller';
import { DecoratedTitle } from '@shared-molecules/decorated-title';

import { Provider } from '@shared-contexts/content-visibility-controller/providers/work-experience-history';

import './style.css';
import { SelectEmploymentSummary } from '@feat-work-experience-history-molecules/select-employment-summary';


function WorkExperienceHistory() {
    const { experienceSummaries } = useContext(WorkExperienceTimelineContext);

    const updatedProvider = structuredClone(Provider);

    updatedProvider.labelData = updatedProvider.labelData.map((value, index) => ({
        ...value,
        role: experienceSummaries[index]?.role,
        employmentDuration: experienceSummaries[index]?.employmentDuration
    }));

    updatedProvider.LabelComponent = SelectEmploymentSummary;

    const Components = experienceSummaries.map((value, index) => (
        <WorkExperienceProvider
            key={`work-experience-provider-${index}`}
            Provider={{
                experience: value
            }}>
            <EmploymentSummary />

        </WorkExperienceProvider>
    ));


    return (
        <section className='work-experience-history'>
            <DecoratedTitle text='WORK EXPERIENCE' color='charcoal-grey' />
            <ContentVisibilityControllerProvider Provider={updatedProvider}>
                <ContentVisibilityController />
            </ContentVisibilityControllerProvider>
            <div className='work-experience-timeline__summary'>
                {Components}
            </div>
        </section>
    );
}

export { WorkExperienceHistory };
