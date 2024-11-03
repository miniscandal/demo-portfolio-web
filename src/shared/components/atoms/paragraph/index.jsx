import './style.css';


function Paragraph({
    text = 'Paragraph: \n\nThe <p> in HTML defines a paragraph.\n\nIt is used to group blocks of text, facilitating \nthe reading and structure of content on a web page.',
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
