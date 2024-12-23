import { Paragraph } from '@shared-atoms/paragraph';

import './style.css';


function RotatedTextPoster({
    text = 'ROTATE TEXT POSTER'
}) {
    const paragraph = {
        text,
        size: 'medium'
    };

    return (
        <div className='rotated-text-poster'>
            <div className='rotated-text-poster__div'>
            </div>
            <div className='rotated-text-poster__div'>
            </div>
            <div>
                <Paragraph {...paragraph} />
            </div>
        </div >
    );
}

export { RotatedTextPoster };
