import { Paragraph } from '@shared-atoms/paragraph';

import './style.css';


function Sing({
    text = 'SING',
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
        <div className={`sing ${classList.join(' ')}`}>
            <Paragraph {...paragraph} />
        </div>
    );
}

export { Sing };
