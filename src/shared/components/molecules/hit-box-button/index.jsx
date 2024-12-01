import './style.css';


function HitBoxButton({ children, onClickCallback, dataSet = { index: null } }) {
    const { index } = dataSet;

    return (
        <button className='hit-box-button' onClick={onClickCallback} data-index={index}>
            {children}
        </button>
    );
}

export { HitBoxButton };
