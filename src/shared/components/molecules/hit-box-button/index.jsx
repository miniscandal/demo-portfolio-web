import './style.css';


function HitBoxButton({
    children,
    handleClick
}) {

    return (
        <button
            className='hit-box-button'
            onClick={handleClick}
        >
            {children}
        </button>
    );
}

export { HitBoxButton };
