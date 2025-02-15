import { HTML_FOR_MY_SOCIAL_GOALS_THROUGH_MAIN } from '@shared-constants/html-for-id';
import { HTML_FOR_MY_SOCIAL_GOALS_THROUGH_SECONDARY } from '@shared-constants/html-for-id';
import { HTML_FOR_MY_PERSONAL_GOALS_THROUGH_MAIN } from '@shared-constants/html-for-id';
import { HTML_FOR_MY_PERSONAL_GOALS_THROUGH_SECONDARY } from '@shared-constants/html-for-id';


const ProviderSocialGoals = {
    labelData: [
        {
            htmlFor: HTML_FOR_MY_SOCIAL_GOALS_THROUGH_MAIN,
            customProperties: {}
        },
        {
            htmlFor: HTML_FOR_MY_SOCIAL_GOALS_THROUGH_SECONDARY,
            customProperties: {}
        }
    ],
    groupName: 'my-social-goals-through',
    selectDefaultHtmlFor: HTML_FOR_MY_SOCIAL_GOALS_THROUGH_MAIN,
    LabelComponent: undefined
};

const ProviderPersonalGoals = {
    labelData: [
        {
            htmlFor: HTML_FOR_MY_PERSONAL_GOALS_THROUGH_MAIN,
            customProperties: {}
        },
        {
            htmlFor: HTML_FOR_MY_PERSONAL_GOALS_THROUGH_SECONDARY,
            customProperties: {}
        }
    ],
    groupName: 'my-personal-goals-through',
    selectDefaultHtmlFor: HTML_FOR_MY_PERSONAL_GOALS_THROUGH_MAIN,
    LabelComponent: undefined
};

export {
    ProviderSocialGoals,
    ProviderPersonalGoals
};
