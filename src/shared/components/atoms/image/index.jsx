import './style.css';


function Image({
    src = undefined,
    size = 'regular',
    objectFit = 'none',
    alt = 'Image description',
}) {
    const classList = [
        size,
        objectFit
    ];


    return (
        <div className={`image ${classList.join(' ')}`}>
            {
                src && <img src={src} alt={alt} />
            }
        </div>
    );
}

export { Image };
