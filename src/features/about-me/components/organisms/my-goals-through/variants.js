import { SelectGoalDescription } from '@feat-about-me-molecules/select-goal-description';

import { PIXEL_ART_ANIME_MINICODE_ANIMATION_V3 } from '@shared-atoms/pixel-art/variants';
import { PIXEL_ART_ANIME_MINICODE_ANIMATION_V4 } from '@shared-atoms/pixel-art/variants';


const myGoalsThroughMain = {
    title: 'Social goals through my profession',
    character: PIXEL_ART_ANIME_MINICODE_ANIMATION_V3,
    type: 'primary-scene',
    Provider: {
        radioInputsData: [
            {
                htmlFor: '01-MGS'
            },
            {
                htmlFor: '02-MGS'
            }
        ],
        selectDefaultHtmlFor: '01-MGS',
        groupName: 'main-goals-through-main',
        LabelComponent: SelectGoalDescription
    }
};

const myGoalsThroughSecondary = {
    title: 'Personal goals through key activities',
    character: PIXEL_ART_ANIME_MINICODE_ANIMATION_V4,
    type: 'secondary-scene',
    Provider: {
        radioInputsData: [
            {
                htmlFor: '01-MGP'
            },
            {
                htmlFor: '02-MGP'
            }
        ],
        selectDefaultHtmlFor: '01-MGP',
        groupName: 'main-goals-through-secondary',
        LabelComponent: SelectGoalDescription
    }
};

export {
    myGoalsThroughMain,
    myGoalsThroughSecondary
};
