import { Title } from '@shared-atoms/title';

import './style.css';


function DecoratedTitle({
    text = 'Decorated Title'
}) {

    return (
        <div className='decorated-title'>
            <Title text={text} type='h2' />
        </div>
    );
}

export { DecoratedTitle };
