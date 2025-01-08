import { IconFontSvg } from '@shared-atoms/icon-font-svg';
import { Title } from '@shared-atoms/title';

import './style.css';


function CompetencyName({
    name = 'Competency Name',
    iconFontSvg = undefined
}) {
    const iconSvgFont = {
        svg: iconFontSvg,
        color: 'olive-green',
        size: 'regular'
    };
    const title = {
        text: name,
        type: 'h3',
        color: 'sky-blue'
    };


    return (
        <div className='competency-name'>
            <IconFontSvg {...iconSvgFont} />
            <div className='competency-name__div'>
                <Title {...title} />
            </div>
        </div>
    );
}

export { CompetencyName };
