import './style.css';


function FloatingShelves({
    children
}) {

    return (
        <div className='floating-shelves'>
            <div className='floating-shelves__item'>
                {children}
            </div>
            <div className='floating-shelves__base'>
            </div>
        </div>
    );
}

export { FloatingShelves };
