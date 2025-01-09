import { Paragraph } from '@shared-atoms/paragraph';

import './style.css';


function VerticalPoster({
    text = 'VERTICAL POSTER'
}) {
    const paragraph = {
        text,
        size: 'medium',
        color: 'vintage-rose'
    };

    return (
        <div className='vertical-poster'>
            <Paragraph {...paragraph} />
        </div>
    );
}

export { VerticalPoster };
