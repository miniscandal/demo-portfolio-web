import './style.css';

function Picture({
    src = undefined,
    size = 'regular',
    objectFit = 'none',
    alt = 'Picture description',
}) {
    const classList = [
        size,
        objectFit
    ];

    return (
        <div className={`picture ${classList.join(' ')}`}>
            {
                src && <img src={src} alt={alt} />
            }
        </div>
    );
}

export { Picture };
