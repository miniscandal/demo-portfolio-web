import { ProviderSocialGoals } from '@shared-contexts/content-visibility-controller/providers/my-goals-through';
import { ProviderPersonalGoals } from '@shared-contexts/content-visibility-controller/providers/my-goals-through';

import { SelectGoalDescription } from '@feat-about-me-molecules/select-goal-description';

import { PIXEL_ART_ANIME_MINICODE_ANIMATION_V3 } from '@shared-atoms/pixel-art/variants';
import { PIXEL_ART_ANIME_MINICODE_ANIMATION_V4 } from '@shared-atoms/pixel-art/variants';


const myGoalsThroughMain = {
    title: 'Social goals through my profession',
    character: PIXEL_ART_ANIME_MINICODE_ANIMATION_V3,
    type: 'primary-scene',
    Provider: {
        ...ProviderSocialGoals,
        LabelComponent: SelectGoalDescription
    }
};

const myGoalsThroughSecondary = {
    title: 'Personal goals through key activities',
    character: PIXEL_ART_ANIME_MINICODE_ANIMATION_V4,
    type: 'secondary-scene',
    Provider: {
        ...ProviderPersonalGoals,
        LabelComponent: SelectGoalDescription
    }
};

export {
    myGoalsThroughMain,
    myGoalsThroughSecondary
};
