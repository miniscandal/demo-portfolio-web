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
            <div className='div-main'>
                <div className='div-secondary'>
                    <div className='div-content'>
                        <Paragraph {...paragraphFirstWord} />
                        <Paragraph {...paragraphSecondWord} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export { RotatedTextPoster };
