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


    return (
        <div className={`horizontal-poster ${classList.join(' ')}`}>
            <div className='horizontal-poster__div'>
                <Paragraph text={textMain} size='medium' color='light' />
            </div>
            <div className='horizontal-poster__div'>
                <Paragraph text={textSecondary} size='medium' color='light' />
            </div>
        </div>
    );
}

export { HorizontalPoster };
