import { Title } from '@shared-atoms/title';

import './style.css';


function DecoratedTitle({
    text = 'Decorated Title',
    color = 'dark'
}) {

    return (
        <div className='decorated-title'>
            <Title text={text} color={color} type='h2' />
        </div>
    );
}

export { DecoratedTitle }
