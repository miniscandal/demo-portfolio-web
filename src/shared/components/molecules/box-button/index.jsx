import './style.css';


function BoxButton({ children, onClickCallback }) {

    return (
        <button className='box-button' onClick={onClickCallback}>
            {children}
        </button>
    );
}

export { BoxButton };
