import { HTML_FOR_WORK_EXPERIENCE_1 } from '@shared-constants/html-for-id';
import { HTML_FOR_WORK_EXPERIENCE_2 } from '@shared-constants/html-for-id';
import { HTML_FOR_WORK_EXPERIENCE_3 } from '@shared-constants/html-for-id';


const Provider = {
    labelData: [
        {
            htmlFor: HTML_FOR_WORK_EXPERIENCE_1,
            customProperties: {
                role: undefined,
                employmentDuration: {
                    start: undefined,
                    end: undefined
                }
            }
        },
        {
            htmlFor: HTML_FOR_WORK_EXPERIENCE_2,
            customProperties: {
                role: undefined,
                employmentDuration: {
                    start: undefined,
                    end: undefined
                }
            }
        },
        {
            htmlFor: HTML_FOR_WORK_EXPERIENCE_3,
            customProperties: {
                role: undefined,
                employmentDuration: {
                    start: undefined,
                    end: undefined
                }
            }
        }
    ],
    groupName: 'work-experience-history',
    selectDefaultHtmlFor: HTML_FOR_WORK_EXPERIENCE_1,
    detailsSummary: {
        text: 'Work Experience History'
    },
    ariaLabel: 'Work Experience History List',
    LabelComponent: undefined,
};

export { Provider };
