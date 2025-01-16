import { Title } from '@shared-atoms/title';
import { Paragraph } from '@shared-atoms/paragraph';

import './style.css';


function AboutSummary({
    title: titleText = 'About Summary',
    description = undefined
}) {
    const title = {
        text: titleText,
        type: 'h4',
        color: 'light'
    };
    const paragraph = {
        text: description,
        color: 'light'
    };


    return (
        <section className='about-summary'>
            <div className='about-summary__div'>
                <Title {...title} />
            </div>
            <Paragraph {...paragraph} />
        </section>
    )
}

export { AboutSummary };
