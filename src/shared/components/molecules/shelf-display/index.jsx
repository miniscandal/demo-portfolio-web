import './style.css';


function ShelfDisplay({
    children
}) {

    return (
        <div className='shelf-display'>
            <div className='shelf-display__div'>
                {children}
            </div>
            <div className='shelf-display__div'>
            </div>
        </div>
    );
}

export { ShelfDisplay };
