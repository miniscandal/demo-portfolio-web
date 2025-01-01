import './style.css';


function Span({
    text = 'span',
    color = 'light',
    size = 'regular'
}) {
    const classList = [
        color,
        size
    ];

    return (
        <span className={`span ${classList.join(' ')}`}>{text}</span>
    );
}

export { Span };
