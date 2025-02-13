import { useContext, useState } from 'react';

import { ContentVisibilityControllerContext } from '@shared-contexts/content-visibility-controller';

import './style.css';


function UseDetailsSummary({
    items
}) {
    const { detailsSummary: { text, open } } = useContext(ContentVisibilityControllerContext);
    const [modeOpen, setModeOpen] = useState(open);

    const liComponents = items.map(value => <li key={value.key}> {value} </li>);

    const toggleModeOpen = (event) => {
        const summary = event.target.closest('summary');
        const label = event.target.closest('label');

        if (summary) {
            setModeOpen(prev => !prev);
            event.preventDefault();
        }

        if (label) {
            setModeOpen((prev => {
                if (prev) {
                    return false;
                }
            }));
        }
    };

    const Component = (
        <details className='details-summary' open={modeOpen}>
            <summary onClick={toggleModeOpen}>
                {text}
            </summary>
            <ol onClick={toggleModeOpen}>
                {liComponents}
            </ol>
        </details>
    );


    return {
        DetailsSummary: Component,
    };
}

export { UseDetailsSummary };
