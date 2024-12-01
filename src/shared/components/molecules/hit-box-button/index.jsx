import './style.css';


function HitBoxButton({ children, onClickCallback, readingMode = false, dataSet = { index: null } }) {
    const classList = [
        readingMode ? 'reading-mode' : ''
    ];
    const { index } = dataSet;

    return (
        <button className={`hit-box-button ${classList.join(' ')}`} onClick={onClickCallback} data-index={index}>
            {children}
        </button>
    );
}

export { HitBoxButton };
