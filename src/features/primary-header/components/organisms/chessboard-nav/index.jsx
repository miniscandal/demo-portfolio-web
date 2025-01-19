import { TextBoxOverlay } from '@feat-primary-header-molecules/text-box-overlay';

import { UnorderedList } from '@shared-molecules/unordered-list';

import { SCROLL_PAGE_WORK_EXPERIENCE_HISTORY } from '@shared-constants/anchor-id';
import { SCROLL_PAGE_PERSONAL_SOFTWARE_PROJECTS } from '@shared-constants/anchor-id';
import { SCROLL_PAGE_PROFESSIONAL_PROFILE } from '@shared-constants/anchor-id';
import { SCROLL_PAGE_ABOUT_ME } from '@shared-constants/anchor-id';
import { SCROLL_PAGE_PRIMARY_FOOTER } from '@shared-constants/anchor-id';

import './style.css';


function ChessboardNav() {
    const classList = [];
    const items = [
        {
            id: 'work-experience-history',
            text: 'WORK EXPERIENCE',
            symbol: '01',
            idAnchor: SCROLL_PAGE_WORK_EXPERIENCE_HISTORY
        },
        {
            id: 'personal-software-projects',
            text: 'PERSONAL_PROJECTS',
            symbol: '02',
            idAnchor: SCROLL_PAGE_PERSONAL_SOFTWARE_PROJECTS
        },
        {
            id: 'professional-profile',
            text: 'PROFESSIONAL PROFILE',
            symbol: '03',
            idAnchor: SCROLL_PAGE_PROFESSIONAL_PROFILE
        },
        {
            id: 'about-me',
            text: 'ABOUT ME',
            symbol: '04',
            idAnchor: SCROLL_PAGE_ABOUT_ME
        },
        {
            id: 'primary-footer',
            text: 'ADDITIONAL INFORMATION',
            symbol: '05',
            idAnchor: SCROLL_PAGE_PRIMARY_FOOTER
        },
    ];
    const squareShapeAnchorLinks = {
        Component: (({ idAnchor, ...values }) => (
            <a href={`#${idAnchor}`} tabIndex={idAnchor ? undefined : -1}>
                <TextBoxOverlay {...values} size='adaptive' />
            </a>
        )),
        items
    };

    return (
        <div className={`chessboard-nav ${classList.join(' ')}`}>
            <UnorderedList {...squareShapeAnchorLinks} />
        </div>
    );
}

export { ChessboardNav };
