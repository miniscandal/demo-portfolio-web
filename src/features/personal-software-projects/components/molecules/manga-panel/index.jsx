import { Span } from '@shared-atoms/span';

import './style.css';


function MangaPanel({ label, children }) {

    return (
        <div className='manga-panel'>
            {children}
            <Span text={label} size='small' />
        </div>
    );
}

export { MangaPanel };
