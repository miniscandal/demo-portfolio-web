import mock from '@shared-mocks/dom-components/paragraph.json';

import './style.css';


function Paragraph({
    text = mock.text,
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
