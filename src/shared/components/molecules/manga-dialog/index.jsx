import { Paragraph } from '@shared-atoms/paragraph';

import './style.css';


function MangaDialog({ text }) {
    const paragraph = {
        text,
        color: 'charcoal-grey',
        cursorAnimation: true
    };

    return (
        <div className='manga-dialog'>
            <div>
                <Paragraph {...paragraph} />
            </div>
            <div>
            </div>
        </div>
    );
}

export { MangaDialog };
