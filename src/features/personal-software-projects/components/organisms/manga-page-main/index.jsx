import { MangaPanelProjectDescription } from '@feat-personal-software-projects-organisms/manga-panel-project-description';
import { MangaPanelProjectPreview } from '@feat-personal-software-projects-organisms/manga-panel-project-preview';
import { MangaPanelProjectAppliedConcepts } from '@feat-personal-software-projects-organisms/manga-panel-project-applied-concepts';
import { MangaPanelProjectPlanning } from '@feat-personal-software-projects-organisms/manga-panel-project-planning';
import { createMangaPanel } from '@feat-personal-software-projects-helpers/create-manga-panel';

import {
    MPP_DESCRIPTION_ID,
    MPP_PLANNING_ID,
    MPP_TECH_ECOSYSTEM_ID,
    MPP_PREVIEW_ID,
} from '@feat-personal-software-projects-constants/manga-panel-id';

import { SelectableList } from '@shared-organisms/selectable-list';

import './style.css';


const MANGA_PANELS = [
    {
        id: MPP_DESCRIPTION_ID,
        Component: createMangaPanel('Ep 01', <MangaPanelProjectDescription />)
    },
    {
        id: MPP_PLANNING_ID,
        Component: createMangaPanel('Ep 02', <MangaPanelProjectPlanning />)
    },
    {
        id: MPP_TECH_ECOSYSTEM_ID,
        Component: createMangaPanel('Ep 03', <MangaPanelProjectAppliedConcepts />)
    },
    {
        id: MPP_PREVIEW_ID,
        Component: createMangaPanel('Ep 04', <MangaPanelProjectPreview />)
    }
];

function MangaPageMain({
    onSelectPageId = () => { }
}) {

    return (
        <div className='manga-page-main'>
            <SelectableList items={MANGA_PANELS} onChange={onSelectPageId} />
        </div>
    );
}

export { MangaPageMain };
