import { useContext } from 'react';

import { MangaContext } from '@feat-home-personal-software-projects-contexts/manga-context';

import { MP_SP_MAIN_ID } from '@feat-home-personal-software-projects-constants/manga-panel-identifiers';
import { MP_SP_SECONDARY_ID } from '@feat-home-personal-software-projects-constants/manga-panel-identifiers';

import { UnorderedList } from '@shared-molecules/unordered-list';

import './style.css';


function MangaPageSecondary({
    mainPanelChildren = () => null,
    secondaryPanelChildren = () => null
}) {
    const { elements: { unorderedList }, useStates: { mangaPanel } } = useContext(MangaContext);
    const [{ secondaryId }] = mangaPanel;

    const mainPanel = {
        id: MP_SP_MAIN_ID,
        text: 'Sc 01',
        ChildrenComponent: mainPanelChildren
    };
    const secondaryPanel = {
        id: MP_SP_SECONDARY_ID,
        text: 'Sc 02',
        ChildrenComponent: secondaryPanelChildren
    };

    const items = secondaryId === MP_SP_SECONDARY_ID
        ? [
            secondaryPanel,
            mainPanel,
            secondaryPanel
        ] : [
            mainPanel,
            mainPanel,
            secondaryPanel
        ];

    const selectListItemId = secondaryId ? unorderedList.selectListItemId : MP_SP_MAIN_ID;

    return (
        <section className='manga-page-secondary'>
            <UnorderedList
                {...unorderedList}
                selectListItemId={selectListItemId}
                items={items}
                id='manga-page-secondary'
            />
        </section>
    );
}

export { MangaPageSecondary };
