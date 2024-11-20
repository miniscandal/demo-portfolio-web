import { MangaPanelProjectDescription } from '@feat-home-personal-software-projects-organisms/manga-panel-project-description';
import { MangaPanelProjectPreview } from '@feat-home-personal-software-projects-organisms/manga-panel-project-preview';
import { MangaPanelProjectAppliedConcepts } from '@feat-home-personal-software-projects-organisms/manga-panel-project-applied-concepts';
import { MangaPanelProjectPlanning } from '@feat-home-personal-software-projects-organisms/manga-panel-project-planning';
import { MangaPanel } from '@feat-home-personal-software-projects-organisms/manga-panel';

import { MPP_DESCRIPTION_ID } from '@feat-home-personal-software-projects-constants/manga-panel-identifiers';
import { MPP_PLANNING_ID } from '@feat-home-personal-software-projects-constants/manga-panel-identifiers';
import { MPP_TECH_ECOSYSTEM_ID } from '@feat-home-personal-software-projects-constants/manga-panel-identifiers';
import { MPP_PREVIEW_ID } from '@feat-home-personal-software-projects-constants/manga-panel-identifiers';

import { UnorderedList } from '@shared-molecules/unordered-list';

import './style.css';


function MangaPageMain({ state }) {
    const { setReadMangaPanelId } = state;

    const items = [
        {
            id: MPP_DESCRIPTION_ID,
            text: 'Ep 01',
            ChildrenComponent: MangaPanelProjectDescription
        },
        {
            id: MPP_PLANNING_ID,
            text: 'Ep 02',
            ChildrenComponent: MangaPanelProjectPlanning
        },
        {
            id: MPP_TECH_ECOSYSTEM_ID,
            text: 'Ep 03',
            ChildrenComponent: MangaPanelProjectAppliedConcepts
        },
        {
            id: MPP_PREVIEW_ID,
            text: 'Ep 04',
            ChildrenComponent: MangaPanelProjectPreview
        },
    ];

    const unorderedList = {
        id: 'manga-page-main',
        selectListItemId: null,
        Component: MangaPanel,
        items,
        handleClick: (listItem) => {
            const id = listItem.dataset.id;

            setReadMangaPanelId(id);
        }
    };

    return (
        <section className='manga-page-main'>
            <UnorderedList {...unorderedList} />
        </section>
    );
}

export { MangaPageMain };
