import { useContext } from 'react';

import { WorkExperienceTimelineContext } from '@feat-work-experience-history-contexts/work-experience-timeline';

import { ContentVisibilityControllerProvider } from '@shared-contexts/content-visibility-controller';
import { WorkExperienceProvider } from '@feat-work-experience-history-contexts/work-experience';

import { EmploymentSummary } from '@feat-work-experience-history-organisms/employment-summary';
import { SelectEmploymentSummary } from '@feat-work-experience-history-molecules/select-employment-summary';

import { ContentVisibilityController } from '@shared-organisms/content-visibility-controller';
import { DecoratedTitle } from '@shared-molecules/decorated-title';

import { Provider } from '@shared-contexts/content-visibility-controller/providers/work-experience-history';

import './style.css';


function WorkExperienceHistory() {
    const { experienceSummaries } = useContext(WorkExperienceTimelineContext);

    const updatedProvider = structuredClone(Provider);

    updatedProvider.LabelComponent = SelectEmploymentSummary;
    updatedProvider.labelData = Provider.labelData.map((value, index) => ({
        ...value,
        customProperties: {
            role: experienceSummaries[index].role,
            employmentDuration: experienceSummaries[index].employmentDuration
        }
    }));

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
            <div className='work-experience-history__content'>
                <ContentVisibilityControllerProvider Provider={updatedProvider}>
                    <ContentVisibilityController />
                </ContentVisibilityControllerProvider>
                <div className='work-experience-history__experience-summary'>
                    {Components}
                </div>
            </div>
        </section>
    );
}

export { WorkExperienceHistory };
