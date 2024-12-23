import { Paragraph } from '@shared-atoms/paragraph';

import './style.css';


function TextPoster({
    text = 'TEXT POSTER',
    writingVertical = false
}) {
    const classList = [
        writingVertical ? 'writing-vertical' : ''
    ];
    const paragraph = {
        text,
        size: 'medium'
    };

    return (
        <div className={`text-poster ${classList.join(' ')}`}>
            <Paragraph {...paragraph} />
        </div>
    );
}

export { TextPoster };
