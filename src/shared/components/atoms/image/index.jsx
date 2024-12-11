import './style.css';


function Image({
    src = undefined,
    size = 'regular',
    objectFit = 'none'
}) {

    return (
        <div className={`image ${size} ${objectFit}`}>
            <img src={src} />
        </div>
    );
}

export { Image };
