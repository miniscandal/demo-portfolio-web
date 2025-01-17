import { DecoratedTitle } from '@shared-molecules/decorated-title';

import './style.css';


function Header() {
    const decoratedTitle = {
        text: 'TECHNICAL COMPETENCIES AND EXPERTISE',
        color: 'charcoal-grey'
    };

    return (
        <header>
            <DecoratedTitle {...decoratedTitle} />
        </header>
    );
}

export { Header };
