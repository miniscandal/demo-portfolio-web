import { Title } from '@shared-atoms/title';
import { Paragraph } from '@shared-atoms/paragraph';

import './style.css';


function AboutSummary({
    title: titleText = 'About Summary',
    description = undefined
}) {

    return (
        <section className='about-summary'>
            <div className='about-summary__div'>
                <Title text={titleText} type='h4' color='light' />
            </div>
            <Paragraph text={description} color='light' />
        </section>
    )
}

export { AboutSummary };
