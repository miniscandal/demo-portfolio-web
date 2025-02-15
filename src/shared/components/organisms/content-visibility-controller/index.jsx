import { useContext, useRef } from 'react';

import { ContentVisibilityControllerContext } from '@shared-contexts/content-visibility-controller';

import { RadioButtonGroup } from '@shared-molecules/radio-button-group';

import { DetailsSummary } from '@shared-molecules/details-summary';

import './style.css';


function ContentVisibilityController() {
    const {
        labelData,
        groupName,
        selectDefaultHtmlFor,
        ariaLabel,
        detailsSummary: { text },
        LabelComponent
    } = useContext(ContentVisibilityControllerContext);

    const elementRef = useRef(null);

    const handleClick = (event) => {
        if (!event.target.closest('li')) {
            return;
        }

        /*
        const a = document.createElement('a');
        a.href = `#${SCROLL_PAGE_WORK_EXPERIENCE_HISTORY}`;
        a.click();
        */

        elementRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };


    return (
        <div
            ref={elementRef}
            className='content-visibility-controller'
            onClick={handleClick}
        >
            <DetailsSummary text={text}>
                <RadioButtonGroup
                    labelData={labelData}
                    groupName={groupName}
                    selectDefaultHtmlFor={selectDefaultHtmlFor}
                    ariaLabel={ariaLabel}
                    LabelComponent={LabelComponent}
                />
            </DetailsSummary>
        </div>
    );
}

export { ContentVisibilityController };
