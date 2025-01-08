import { Title } from '@shared-atoms/title';

import './style.css';


function DecoratedTitle({
    text = 'Decorated Title',
    color = 'dark'
}) {
    const title = {
        text,
        color,
        type: 'h2'
    };

    return (
        <div className='decorated-title'>
            <Title {...title} />
        </div>
    );
}

export { DecoratedTitle }
