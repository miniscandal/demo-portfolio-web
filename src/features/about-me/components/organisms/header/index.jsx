import { DecoratedTitle } from '@shared-molecules/decorated-title';

import './style.css';


function Header() {
    const decoratedTitle = {
        text: 'ABOUT ME',
        color: 'light'
    };


    return (
        <header>
            <DecoratedTitle {...decoratedTitle} />
        </header>
    );
}

export { Header };
