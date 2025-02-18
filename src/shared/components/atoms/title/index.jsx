import './style.css';


function Title({
    text = 'I am a title',
    type = 'h1'
}) {
    const types = {
        h1: <h1 className='title h1'>{text}</h1>,
        h2: <h2 className='title h2'>{text}</h2>,
        h3: <h3 className='title h3'>{text}</h3>,
        h4: <h4 className='title h4'>{text}</h4>
    };
    const title = types[type];

    return (
        title
    );
}

export { Title };
