import { useContext } from 'react';

import { ContentVisibilityControllerContext } from '@shared-contexts/content-visibility-controller';

import { UseControlRadioInput } from '@shared-custom-hooks/use-control-radio-input';
import { UseDetailsSummary } from '@shared-custom-hooks/use-details-summary';

import './style.css';


function ContentVisibilityController() {
    const { labelData, groupName, selectDefaultHtmlFor, LabelComponent } = useContext(ContentVisibilityControllerContext);

    const { radioInputComponents } = UseControlRadioInput({
        labelData,
        groupName,
        selectDefaultHtmlFor,
        LabelComponent
    });

    const { DetailsSummary } = UseDetailsSummary({
        items: radioInputComponents
    });

    return (
        <div className='work-experience-timeline__controls'>
            {DetailsSummary}
            <div className='work-experience-timeline__controls--desktop'>
                {radioInputComponents}
            </div>
        </div>
    );
}

export { ContentVisibilityController };
