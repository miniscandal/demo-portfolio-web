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
    const color = 'deep-ocean';


    return (
        <div className='company-details'>
            <Paragraph size='middle' color={color} text={text} />
            <div className='company-details__div'>
                <WorkDateRange
                    employmentDuration={employmentDuration}
                    color={color}
                />
                <Paragraph size='regular' color={color} text={location} />
            </div>
        </div>
    );
}

export { CompanyDetails };
