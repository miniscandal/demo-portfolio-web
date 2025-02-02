import { IconFontSvg } from '@shared-atoms/icon-font-svg';
import { Title } from '@shared-atoms/title';

import './style.css';


function CompetencyName({
    name = 'Competency Name',
    iconFontSvg = undefined
}) {

    return (
        <div className='competency-name'>
            <div className='competency-name__div'>
                <IconFontSvg svg={iconFontSvg} color='olive-green' size='regular' />
            </div>
            <div className='competency-name__div'>
                <Title text={name} type='h3' color='sky-blue' />
            </div>
        </div>
    );
}

export { CompetencyName };
