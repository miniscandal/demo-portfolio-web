import { Title } from '@shared-atoms/title';
import { Paragraph } from '@shared-atoms/paragraph';
import { IconFontSvg } from '@shared-atoms/icon-font-svg';

import { Database } from '@shared-atoms/icon-font-svg/variants';
import { text } from '@shared-mocks/dom-components/professional-competency.json';

import './style.css';


function CompetencyDescription({
    iconFontSvg = Database,
    name = 'Competency Description',
    description = text
}) {
    const iconSvgFont = {
        svg: iconFontSvg,
        color: 'olive-green'
    };
    const title = {
        text: name,
        type: 'h3',
        color: 'sky-blue'
    };
    const paragraph = {
        text: description,
        color: 'charcoal-grey'
    };

    return (
        <section className='competency-description'>
            <div>
                <IconFontSvg {...iconSvgFont} />
                <Title {...title} />
            </div>
            <Paragraph {...paragraph} />
        </section>
    );
}

export { CompetencyDescription };
