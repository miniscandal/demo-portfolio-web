import { useState } from 'react';

import { MangaPanelExpectedResults } from '@feat-personal-software-projects-organisms/manga-panel-expected-results';
import { MangaPanelProjectPlanning } from '@feat-personal-software-projects-organisms/manga-panel-project-planning';
import { MangaPanelProjectAppliedConcepts } from '@feat-personal-software-projects-organisms/manga-panel-project-applied-concepts';
import { MangaPanelProjectPreview } from '@feat-personal-software-projects-organisms/manga-panel-project-preview';
import { MangaPanel } from '@feat-personal-software-projects-molecules/manga-panel';

import { SelectableList } from '@shared-molecules/selectable-list';

import {
    MPS_PRIMARY_ID,
    MPS_SECONDARY_ID,
    MPP_DESCRIPTION_ID,
    MPP_PLANNING_ID,
    MPP_TECH_ECOSYSTEM_ID,
    MPP_PREVIEW_ID
} from '@feat-personal-software-projects-constants/manga-panel-id';

import './style.css';


const MANGA_PANELS = {
    [MPP_DESCRIPTION_ID]: MangaPanelExpectedResults,
    [MPP_PLANNING_ID]: MangaPanelProjectPlanning,
    [MPP_TECH_ECOSYSTEM_ID]: MangaPanelProjectAppliedConcepts,
    [MPP_PREVIEW_ID]: MangaPanelProjectPreview
};

function MangaPageSecondary({
    selectedMangaPanelId,
    MainMangaPanel
}) {
    const [readMangaPanelId, setReadMangaPanelId] = useState(MPS_PRIMARY_ID);

    const SecondaryMangaPanel = MANGA_PANELS[selectedMangaPanelId];

    const mainPanel = {
        id: readMangaPanelId === MPS_PRIMARY_ID ? MPS_PRIMARY_ID : MPS_SECONDARY_ID,
        Component: readMangaPanelId === MPS_PRIMARY_ID
            ? <MainMangaPanel.Component label='Sc 01' isMiniatureMode={false} />
            : <MangaPanel label='Sc 02'> <SecondaryMangaPanel isMiniatureMode={false} /></MangaPanel>
    };

    const primaryPanel = {
        id: MPS_PRIMARY_ID,
        Component: <MainMangaPanel.Component label='Sc 01' isMiniatureMode={true} />
    };

    const secondaryPanel = {
        id: MPS_SECONDARY_ID,
        Component: <MangaPanel label='Sc 02'><SecondaryMangaPanel isMiniatureMode={true} /></MangaPanel>
    };


    return (
        <div className='manga-page-secondary'>
            <SelectableList
                defaultSelectItemId={MPS_PRIMARY_ID}
                items={[mainPanel, primaryPanel, secondaryPanel]}
                onChange={setReadMangaPanelId}
            />
        </div>
    );
}

export { MangaPageSecondary };
