import { Paragraph } from '@shared-atoms/paragraph';

import './style.css';


function VerticalPoster({
    text = 'VERTICAL POSTER'
}) {

    return (
        <div className='vertical-poster'>
            <Paragraph text={text} size='medium' color='vintage-rose' />
        </div>
    );
}

export { VerticalPoster };
