import './style.css';


function LittleStar({ size = 'regular' }) {
    const classList = [
        size
    ];

    return (
        <div className={`little-star ${classList.join(' ')}`}>
            <div className='little-star__div'>
                <div className='little-star__core'></div>
            </div>
        </div>
    );
}

export { LittleStar };
