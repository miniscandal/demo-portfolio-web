import { Paragraph } from '@shared-atoms/paragraph';

import './style.css';


function HorizontalPoster({
    textMain = 'HORIZONTAL',
    textSecondary = 'POSTER ',
    backgroundColor = true
}) {
    const classList = [
        backgroundColor ? 'background-color' : ''
    ];
    const paragraphMain = {
        text: textMain,
        size: 'medium',
        color: 'light'
    };
    const paragraphSecondary = {
        text: textSecondary,
        size: 'medium',
        color: 'light'
    };

    return (
        <div className={`horizontal-poster ${classList.join(' ')}`}>
            <div className='horizontal-poster__div'>
                <Paragraph {...paragraphMain} />
            </div>
            <div className='horizontal-poster__div'>
                <Paragraph {...paragraphSecondary} />
            </div>
        </div>
    );
}

export { HorizontalPoster };
