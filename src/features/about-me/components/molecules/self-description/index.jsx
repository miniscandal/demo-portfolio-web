import { Title } from '@shared-atoms/title';
import { Paragraph } from '@shared-atoms/paragraph';

import './style.css';


function SelfDescription({
    title: titleText = 'About Summary',
    description = undefined
}) {

    return (
        <div className='self-description'>
            <Title text={titleText} type='h4' />
            <Paragraph text={description} />
        </div>
    )
}

export { SelfDescription };
