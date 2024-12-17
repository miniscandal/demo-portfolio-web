import { paragraph } from '@shared-mocks/dom-components/data.json';

import './style.css';


function Paragraph({
    text = paragraph,
    size = 'regular',
    color = 'light',
    cursorAnimation = false,
    children
}) {
    const classList = [
        size,
        color,
        cursorAnimation ? 'animation_cursor' : ''
    ];

    return (
        <p className={`paragraph ${classList.join(' ')}`}>
            {!children ? text : children}
        </p>
    );
}

export { Paragraph };
