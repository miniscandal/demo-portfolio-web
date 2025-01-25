import { Paragraph } from '@shared-atoms/paragraph';

import './style.css';


function HorizontalPoster({
    text = 'POSTER ',
    backgroundColor = true
}) {
    const classList = [
        backgroundColor ? 'background-color' : ''
    ];
    const paragraph = {
        text,
        size: 'medium',
        color: 'light'
    };

    return (
        <div className={`horizontal-poster ${classList.join(' ')}`}>
            <div className='horizontal-poster__div'>
                <Paragraph {...paragraph} />
            </div>
        </div>
    );
}

export { HorizontalPoster };
