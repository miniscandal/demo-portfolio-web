import './style.css';


function HitBoxButton({
    children,
    onClickCallback,
    readingMode = false,
    dataSet = {
        index: null
    }
}) {
    const classList = [
        readingMode ? 'reading-mode' : ''
    ];

    return (
        <button className={`hit-box-button ${classList.join(' ')}`} onClick={onClickCallback} data-index={dataSet.index}>
            {children}
        </button>
    );
}

export { HitBoxButton };
