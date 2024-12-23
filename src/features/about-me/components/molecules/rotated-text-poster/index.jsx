import { Paragraph } from '@shared-atoms/paragraph';

import './style.css';


function RotatedTextPoster({
    firstWord = 'ROTATE',
    secondWord = 'TEXT POSTER'
}) {
    const paragraphFirstWord = {
        text: firstWord,
        size: 'medium'
    };
    const paragraphSecondWord = {
        text: secondWord,
        size: 'medium'
    };

    return (
        <div className='rotated-text-poster'>
            <div className='rotated-text-poster__div'>
            </div>
            <div className='rotated-text-poster__div'>
            </div>
            <div>
                <Paragraph {...paragraphFirstWord} />
                <Paragraph {...paragraphSecondWord} />
            </div>
        </div >
    );
}

export { RotatedTextPoster };
