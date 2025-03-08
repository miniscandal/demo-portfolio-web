import { useState } from 'react';

import { MangaPanelProjectDescription } from '@feat-personal-software-projects-organisms/manga-panel-project-description';
import { MangaPanelProjectPreview } from '@feat-personal-software-projects-organisms/manga-panel-project-preview';
import { MangaPanelProjectAppliedConcepts } from '@feat-personal-software-projects-organisms/manga-panel-project-applied-concepts';
import { MangaPanelProjectPlanning } from '@feat-personal-software-projects-organisms/manga-panel-project-planning';

import { MangaPageMain } from '@feat-personal-software-projects-organisms/manga-page-main';
import { MangaPageSecondary } from '@feat-personal-software-projects-organisms/manga-page-secondary';
import { MangaPrimarySideBar } from '@feat-personal-software-projects-organisms/manga-primary-side-bar';

import { MangaPanel } from '@feat-personal-software-projects-molecules/manga-panel';

import {
    MPP_DESCRIPTION_ID,
    MPP_PLANNING_ID,
    MPP_TECH_ECOSYSTEM_ID,
    MPP_PREVIEW_ID,
} from '@feat-personal-software-projects-constants/manga-panel-id';

import './style.css';

const createMangaPanel = (id, Component) => ({
    id,
    Component: ({ label, isMiniatureMode }) => (
        <MangaPanel label={label}>
            <Component isMiniatureMode={isMiniatureMode} />
        </MangaPanel>
    )
});

const MANGA_PANELS = [
    createMangaPanel(MPP_DESCRIPTION_ID, MangaPanelProjectDescription),
    createMangaPanel(MPP_PLANNING_ID, MangaPanelProjectPlanning),
    createMangaPanel(MPP_TECH_ECOSYSTEM_ID, MangaPanelProjectAppliedConcepts),
    createMangaPanel(MPP_PREVIEW_ID, MangaPanelProjectPreview),
];

function Manga() {
    const [selectedMangaPanelId, setSelectedMangaPanelId] = useState(null);

    const mainMangaPanel = MANGA_PANELS.find(value => value.id === selectedMangaPanelId);


    return (
        <article className='manga'>
            {
                selectedMangaPanelId
                    ? <MangaPageSecondary
                        selectedMangaPanelId={selectedMangaPanelId}
                        MainMangaPanel={mainMangaPanel}
                    />
                    : <MangaPageMain
                        onSelectPanelId={setSelectedMangaPanelId}
                        MangaPanels={MANGA_PANELS}
                    />
            }
            <MangaPrimarySideBar setSelectedMangaPanelId={setSelectedMangaPanelId} />
        </article>
    );
}

export { Manga };
