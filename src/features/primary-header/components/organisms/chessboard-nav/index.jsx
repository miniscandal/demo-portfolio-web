import { TextBoxOverlay } from '@feat-primary-header-molecules/text-box-overlay';

import { UnorderedList } from '@shared-molecules/unordered-list';
import { WORK_EXPERIENCE } from '@shared-constants/anchor-id';
import { TECHNICAL_COMPETENCIES_AND_EXPERTISE } from '@shared-constants/anchor-id';
import { PERSONAL_PROJECTS } from '@shared-constants/anchor-id';
import { ABOUT_ME } from '@shared-constants/anchor-id';

import './style.css';


function ChessboardNav() {
    const classList = [];
    const items = [
        {
            id: 'experience',
            text: 'WORK EXPERIENCE',
            symbol: '01',
            idAnchor: WORK_EXPERIENCE
        },
        {
            id: 'portfolio',
            text: 'TECHNICAL EXPERTISE',
            symbol: '02',
            idAnchor: TECHNICAL_COMPETENCIES_AND_EXPERTISE
        },
        {
            id: 'whatIdDo',
            text: 'PERSONAL PROJECTS',
            symbol: '03',
            idAnchor: PERSONAL_PROJECTS
        },
        {
            id: 'contact',
            text: 'ABOUT ME',
            symbol: '04',
            idAnchor: ABOUT_ME
        },
        {
            id: '',
            text: '',
            symbol: '',
            idAnchor: undefined
        },
    ];
    const squareShapeAnchorLinks = {
        Component: (({ idAnchor, ...values }) => (
            <a href={`#${idAnchor}`} tabIndex={idAnchor ? undefined : -1}>
                <TextBoxOverlay {...values} size='auto' />
            </a>
        )),
        items
    };

    return (
        <div className={`chessboard-nav ${classList.join(' ')}`}>
            {<UnorderedList {...squareShapeAnchorLinks} />}
        </div>
    );
}

export { ChessboardNav };
