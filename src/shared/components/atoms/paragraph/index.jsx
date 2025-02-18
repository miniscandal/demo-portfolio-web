import './style.css';


function Paragraph({
    text = 'A paragraph in web is a block of text that groups and organizes a single idea or set of ideas, represented in HTML with the <p> tag. It is used to improve readability and content structure.',
    size = 'regular',
    cursorAnimation = false,
    children,
    nowrap = false
}) {
    const classList = [
        size,
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
