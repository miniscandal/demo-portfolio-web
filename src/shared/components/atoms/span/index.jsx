import './style.css';


function Span({ text = 'span', color = 'light', size = 'regular' }) {

    return (
        <span className={`span ${size} ${color}`}>{text}</span>
    );
}

export { Span };
