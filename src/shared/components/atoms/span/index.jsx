import './style.css';


function Span({
    text = 'span',
    size = 'regular'
}) {
    const classList = [
        size
    ];

    return (
        <span className={`span ${classList.join(' ')}`}>{text}</span>
    );
}

export { Span };
