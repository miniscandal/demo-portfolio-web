import {
    HTML_FOR_CURRENT_SPECIALIZATION,
    HTML_FOR_DEVELOPMENT_ENVIRONMENT,
    HTML_FOR_ACTIVE_PRACTICAL_APPROACH,
    HTML_FOR_MAIN_CONCEPTS
} from '@shared-constants/html-for-id';

const Provider = {
    labelData: [
        {
            htmlFor: HTML_FOR_CURRENT_SPECIALIZATION,
            customProperties: {
                text: 'Current Specialization'
            }
        },
        {
            htmlFor: HTML_FOR_DEVELOPMENT_ENVIRONMENT,
            customProperties: {
                text: 'Development Environment'
            }
        },
        {
            htmlFor: HTML_FOR_ACTIVE_PRACTICAL_APPROACH,
            customProperties: {
                text: 'Active Practical Approach'
            }
        },
        {
            htmlFor: HTML_FOR_MAIN_CONCEPTS,
            customProperties: {
                text: 'Main Concepts'
            }
        }
    ],
    groupName: 'about-me',
    selectDefaultHtmlFor: HTML_FOR_CURRENT_SPECIALIZATION,
    detailsSummary: {
        text: 'Technological Tools and Scheduled'
    },
    LabelComponent: undefined,
};

export { Provider };
