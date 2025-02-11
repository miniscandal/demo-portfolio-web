import { Paragraph } from '@shared-atoms/paragraph';
import { Span } from '@shared-atoms/span';

import './style.css';


function HorizontalPoster({
    textMain = 'HORIZONTAL',
    textSecondary = 'POSTER '
}) {

    return (
        <div className='horizontal-poster'>
            <Paragraph size='medium'>
                <Span text={textMain} />
                <Span text={textSecondary} />
            </Paragraph>
        </div>
    );
}

export { HorizontalPoster };
