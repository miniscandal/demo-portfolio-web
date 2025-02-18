import { Paragraph } from '@shared-atoms/paragraph';

import { WorkDateRange } from '@shared-molecules/work-date-range';

import './style.css';


function CompanyDetails({
    name = 'Capsule Corporation',
    location = 'Prefecture 302',
    industry = 'Capsule Technological',
    employmentDuration
}) {
    const text = `${name} - ${industry}`;


    return (
        <div className='company-details'>
            <Paragraph size='middle' text={text} />
            <div className='company-details__div'>
                <WorkDateRange
                    employmentDuration={employmentDuration}
                />
                <Paragraph size='regular' text={location} />
            </div>
        </div>
    );
}

export { CompanyDetails };
