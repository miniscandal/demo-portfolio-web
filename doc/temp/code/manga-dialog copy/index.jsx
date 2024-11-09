import { Paragraph } from '@shared-atoms/paragraph';

import './style.css';


function MangaDialog({ text, color, bgColor }) {
    const paragraph = {
        text,
        color: 'charcoal-grey'
    };

    return (
        <div className='manga-dialog'>
            <div>
                <div>
                    <Paragraph {...paragraph} />
                </div>
            </div>
        </div>
    );
}

export { MangaDialog };
