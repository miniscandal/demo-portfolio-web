import { useState } from 'react';

import { MangaPanelProjectDescription } from '@feat-personal-software-projects-organisms/manga-panel-project-description';
import { MangaPanelExpectedResults } from '@feat-personal-software-projects-organisms/manga-panel-expected-results';
import { MangaPanelProjectPlanning } from '@feat-personal-software-projects-organisms/manga-panel-project-planning';
import { MangaPanelProjectAppliedConcepts } from '@feat-personal-software-projects-organisms/manga-panel-project-applied-concepts';
import { MangaPanelProjectPreview } from '@feat-personal-software-projects-organisms/manga-panel-project-preview';

import { SelectableList } from '@shared-organisms/selectable-list';

import { createMangaPanel } from '@feat-personal-software-projects-helpers/create-manga-panel';

import {
    MPS_MAIN_ID,
    MPS_PRIMARY_ID,
    MPS_SECONDARY_ID
} from '@feat-personal-software-projects-constants/manga-panel-id';

import {
    MPP_DESCRIPTION_ID,
    MPP_PLANNING_ID,
    MPP_TECH_ECOSYSTEM_ID,
    MPP_PREVIEW_ID
} from '@feat-personal-software-projects-constants/manga-panel-id';

import './style.css';


const MANGA_PANELS = {
    [MPP_DESCRIPTION_ID]: [MangaPanelProjectDescription, MangaPanelExpectedResults],
    [MPP_PLANNING_ID]: [MangaPanelProjectPlanning, () => { }],
    [MPP_TECH_ECOSYSTEM_ID]: [MangaPanelProjectAppliedConcepts, () => { }],
    [MPP_PREVIEW_ID]: [MangaPanelProjectPreview, () => { }]
};

function MangaPageSecondary({ readMangaPageId }) {
    const [readMangaPanelId, setReadMangaPanelId] = useState(MPS_PRIMARY_ID);

    const primaryPanel = {
        id: MPS_PRIMARY_ID,
        Component: createMangaPanel('Sc 01', MANGA_PANELS[readMangaPageId][0]({
            isModePreview: MPS_PRIMARY_ID === readMangaPageId
        }))
    };
    const secondaryPanel = {
        id: MPS_SECONDARY_ID,
        Component: createMangaPanel('Sc 02', MANGA_PANELS[readMangaPageId][0]({
            isModePreview: MPS_SECONDARY_ID === readMangaPageId
        }))
    };

    const mainPanel = (readMangaPanelId === MPS_PRIMARY_ID) ? primaryPanel : secondaryPanel;

    const mangaPanels = [
        {
            ...mainPanel,
            id: MPS_MAIN_ID
        },
        primaryPanel,
        secondaryPanel
    ];


    return (
        <div className='manga-page-secondary'>
            <SelectableList
                defaultSelectItemId={MPS_PRIMARY_ID}
                items={mangaPanels}
                onChange={setReadMangaPanelId}
            />
        </div>
    );
}

export { MangaPageSecondary };
