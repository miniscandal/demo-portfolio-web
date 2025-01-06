import { paragraph } from '@shared-mocks/dom-components/data.json';

import './style.css';


function Paragraph({
    text = paragraph,
    size = 'regular',
    color = 'dark',
    cursorAnimation = false,
    children,
    nowrap = false
}) {
    const classList = [
        size,
        color,
        cursorAnimation ? 'animation_cursor' : '',
        nowrap ? 'nowrap' : ''
    ];

    return (
        <p className={`paragraph ${classList.join(' ')}`}>
            {!children ? text : children}
        </p>
    );
}

export { Paragraph };
