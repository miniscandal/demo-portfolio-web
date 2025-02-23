import { TextBoxOverlay } from '@feat-main-header-molecules/text-box-overlay';

import { UnorderedList } from '@shared-molecules/unordered-list';

import { SCROLL_PAGE_WORK_EXPERIENCE_HISTORY } from '@shared-constants/anchor-id';
import { SCROLL_PAGE_PERSONAL_SOFTWARE_PROJECTS } from '@shared-constants/anchor-id';
import { SCROLL_PAGE_PROFESSIONAL_PROFILE } from '@shared-constants/anchor-id';
import { SCROLL_PAGE_ABOUT_ME } from '@shared-constants/anchor-id';
import { SCROLL_PAGE_PRIMARY_FOOTER } from '@shared-constants/anchor-id';

import './style.css';


function ChessboardNav({
    type = ''
}) {
    const classList = [
        type
    ];
    const items = [
        {
            id: 'work-experience-history',
            text: 'WORK EXPERIENCE',
            symbol: '01',
            idAnchor: SCROLL_PAGE_WORK_EXPERIENCE_HISTORY
        },
        {
            id: 'about-me',
            text: 'ABOUT ME',
            symbol: '02',
            idAnchor: SCROLL_PAGE_ABOUT_ME
        },
        {
            id: 'personal-software-projects',
            text: 'PERSONAL PROJECTS',
            symbol: '03',
            idAnchor: SCROLL_PAGE_PERSONAL_SOFTWARE_PROJECTS
        },
        {
            id: 'professional-profile',
            text: 'PROFESSIONAL PROFILE',
            symbol: '04',
            idAnchor: SCROLL_PAGE_PROFESSIONAL_PROFILE
        },
        {
            id: 'primary-footer',
            text: 'ADDITIONAL INFORMATION',
            symbol: '05',
            idAnchor: SCROLL_PAGE_PRIMARY_FOOTER
        },
    ];
    const Component = (({ idAnchor, ...values }) => (
        <a href={`#${idAnchor}`} tabIndex={idAnchor ? undefined : -1}>
            <TextBoxOverlay {...values} size='adaptive' type={type} />
        </a>
    ));

    return (
        <nav className={`chessboard-nav ${classList.join(' ')}`}>
            <UnorderedList items={items} Component={Component} />
        </nav>
    );
}

export { ChessboardNav };
