import './style.css';


function Title({
    text = 'I am a title',
    color = 'dark',
    type = 'h1'
}) {
    const classList = [
        color
    ].join(' ');
    const types = {
        h1: <h1 className={`title h1 ${classList}`}>{text}</h1>,
        h2: <h2 className={`title h2 ${classList}`}>{text}</h2>,
        h3: <h3 className={`title h3 ${classList}`}>{text}</h3>,
        h4: <h4 className={`title h4 ${classList}`}>{text}</h4>
    };
    const title = types[type];

    return (
        title
    );
}

export { Title };
