import { Span } from '@shared-atoms/span';

import './style.css';


function MangaPanel({ children, number }) {

    return (
        <div className='manga-panel'>
            {children}
            <Span text={number} size='small' />
        </div>
    );
}

export { MangaPanel };
