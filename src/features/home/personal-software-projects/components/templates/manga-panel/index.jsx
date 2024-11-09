import { Span } from '@shared-atoms/span';

import './style.css';


function MangaPanel({ children, text }) {
    const span = {
        text,
        color: 'light',
        size: 'small'
    };

    return (
        <section className='manga-panel'>
            {children}
            <Span {...span} />
        </section>
    );
}

export { MangaPanel };
