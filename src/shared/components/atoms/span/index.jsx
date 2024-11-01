import './style.css';


function Span({ text = 'span', color = 'light' }) {
    const classList = [
        color
    ].join(' ');

    return (
        <span className={`span ${classList}`}>{text}</span>
    );
}

export { Span };
