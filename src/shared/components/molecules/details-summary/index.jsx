import { useRef } from 'react';

import './style.css';


function DetailsSummary({
    text = 'Use DetailsSummary Summary',
    children
}) {
    const detailsRef = useRef(null);

    const handleClick = (event) => {
        if (!event.target.closest('li')) {
            return;
        }

        if (detailsRef.current) {
            detailsRef.current.open = false;
        }
    };

    return (
        <details ref={detailsRef} className='details-summary'>
            <summary>
                {text}
            </summary>
            <ol onClick={handleClick}>
                {children}
            </ol>
        </details>
    );
}

export { DetailsSummary };
