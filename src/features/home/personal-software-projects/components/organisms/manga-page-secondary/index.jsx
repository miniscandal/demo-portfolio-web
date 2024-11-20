import { useState } from 'react';

import { MP_SP_MAIN_ID } from '@feat-home-personal-software-projects-constants/manga-panel-identifiers';
import { MP_SP_SECONDARY_ID } from '@feat-home-personal-software-projects-constants/manga-panel-identifiers';
import { MPP_DESCRIPTION_ID } from '@feat-home-personal-software-projects-constants/manga-panel-identifiers';
import { MPP_PLANNING_ID } from '@feat-home-personal-software-projects-constants/manga-panel-identifiers';
import { MPP_TECH_ECOSYSTEM_ID } from '@feat-home-personal-software-projects-constants/manga-panel-identifiers';
import { MPP_PREVIEW_ID } from '@feat-home-personal-software-projects-constants/manga-panel-identifiers';

import { MangaPanelProjectDescription } from '@feat-home-personal-software-projects-organisms/manga-panel-project-description';
import { MangaPanelObjectives } from '@feat-home-personal-software-projects-organisms/manga-panel-objectives';
import { MangaPanelProjectPlanning } from '@feat-home-personal-software-projects-organisms/manga-panel-project-planning';
import { MangaPanelProjectAppliedConcepts } from '@feat-home-personal-software-projects-organisms/manga-panel-project-applied-concepts';
import { MangaPanelProjectPreview } from '@feat-home-personal-software-projects-organisms/manga-panel-project-preview';
import { MangaPanel } from '@feat-home-personal-software-projects-organisms/manga-panel';

import { UnorderedList } from '@shared-molecules/unordered-list';

import './style.css';


function MangaPageSecondary({ state }) {
    const [selectSecondaryPanel, setSelectSecondaryPanel] = useState(false);

    const { readMangaPanelId } = state;

    const mangaPageSecondaryViews = {
        [MPP_DESCRIPTION_ID]: {
            mainPanelChildren: MangaPanelProjectDescription,
            secondaryPanelChildren: MangaPanelObjectives
        },
        [MPP_PLANNING_ID]: {
            mainPanelChildren: MangaPanelProjectPlanning,
            secondaryPanelChildren: null
        },
        [MPP_TECH_ECOSYSTEM_ID]: {
            mainPanelChildren: MangaPanelProjectAppliedConcepts,
            secondaryPanelChildren: null
        },
        [MPP_PREVIEW_ID]: {
            mainPanelChildren: MangaPanelProjectPreview,
            secondaryPanelChildren: null
        },
        [MP_SP_MAIN_ID]: {
            mainPanelChildren: MangaPanelProjectPreview,
            secondaryPanelChildren: null
        }
    };
    const { mainPanelChildren, secondaryPanelChildren } = mangaPageSecondaryViews[readMangaPanelId];
    const mainPanel = {
        id: MP_SP_MAIN_ID,
        text: 'Sc 01',
        ChildrenComponent: () => mainPanelChildren({ readingMode: !selectSecondaryPanel })
    };
    const secondaryPanel = {
        id: MP_SP_SECONDARY_ID,
        text: 'Sc 02',
        ChildrenComponent: () => secondaryPanelChildren({ readingMode: !selectSecondaryPanel })
    };

    let items = [
        mainPanel,
        mainPanel,
        secondaryPanel
    ];

    if (selectSecondaryPanel) {
        items = [
            secondaryPanel,
            mainPanel,
            secondaryPanel
        ];
    }

    const unorderedList = {
        id: 'manga-page-secondary',
        selectListItemId: selectSecondaryPanel ? MP_SP_SECONDARY_ID : MP_SP_MAIN_ID,
        Component: MangaPanel,
        items,
        handleClick: (listItem) => {
            const id = listItem.dataset.id;

            if (id === MP_SP_SECONDARY_ID) {
                setSelectSecondaryPanel(true);
            } else {
                setSelectSecondaryPanel(false);
            }
        }
    };

    return (
        <section className='manga-page-secondary'>
            <UnorderedList {...unorderedList} />
        </section>
    );
}

export { MangaPageSecondary };
