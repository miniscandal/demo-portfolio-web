import { Paragraph } from '@shared-atoms/paragraph';

import './style.css';


function HorizontalPoster({
    firstWord = 'HORIZONTAL',
    secondWord = 'POSTER'
}) {
    const paragraphFirstWord = {
        text: firstWord,
        size: 'medium',
        color: 'light'
    };
    const paragraphSecondWord = {
        text: secondWord,
        size: 'medium',
        color: 'light'
    };

    return (
        <div className='horizontal-poster'>
            <div className='horizontal-poster__div--box'>
                <div className='horizontal-poster__div--content'>
                    <Paragraph {...paragraphFirstWord} />
                    <div className='horizontal-poster__div--text'>
                        <Paragraph {...paragraphSecondWord} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export { HorizontalPoster };
