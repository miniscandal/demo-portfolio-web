import './style.css';


function EightPointedStart({ children }) {

    return (
        <div className='eight-pointed-start container'>
            <div className='child'>
                {children}
            </div>
        </div>
    );
}

export { EightPointedStart };
