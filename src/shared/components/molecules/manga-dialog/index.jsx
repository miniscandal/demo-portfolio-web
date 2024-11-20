import { Paragraph } from '@shared-atoms/paragraph';

import './style.css';


function MangaDialog({
    text,
    size = 'regular'
}) {
    const paragraph = {
        text,
        color: 'charcoal-grey'
    };

    return (
        <div className={`manga-dialog ${size}`}>
            <div>
                <Paragraph {...paragraph} />
            </div>
            <div>
            </div>
        </div>
    );
}

export { MangaDialog };
