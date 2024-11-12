import { useContext } from 'react';

import { MangaContext } from '@feat-home-personal-software-projects-contexts/manga-context';

import { MangaPageMain } from '@feat-home-personal-software-projects-organisms/manga-page-main';
import { MangaPanelProjectDescription } from '@feat-home-personal-software-projects-organisms/manga-panel-project-description';
import { MangaPageSecondary } from '@feat-home-personal-software-projects-organisms/manga-page-secondary';

import { MangaPanelProjectPlanning } from '@feat-home-personal-software-projects-organisms/manga-panel-project-planning';

import { MPP_DESCRIPTION_ID } from '@feat-home-personal-software-projects-constants/manga-panel-identifiers';
import { MPP_PLANNING_ID } from '@feat-home-personal-software-projects-constants/manga-panel-identifiers';
import { MPP_TECH_ECOSYSTEM_ID } from '@feat-home-personal-software-projects-constants/manga-panel-identifiers';
import { MPP_PREVIEW_ID } from '@feat-home-personal-software-projects-constants/manga-panel-identifiers';

import './style.css';
import { MangaPanelProjectAppliedConcepts } from '@feat-home-personal-software-projects-organisms/manga-panel-project-applied-concepts';
import { MangaPanelProjectPreview } from '@feat-home-personal-software-projects-organisms/manga-panel-project-preview';


function Manga() {
    const { useStates } = useContext(MangaContext);

    const [selectMangaPanel] = useStates.mangaPanel;

    const mangaPageSecondary = {
        [MPP_DESCRIPTION_ID]: {
            mainPanelChildren: MangaPanelProjectDescription,
            secondaryPanelChildren: null
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
        }
    };

    return (
        <section>
            {
                !selectMangaPanel
                    ? <MangaPageMain />
                    : <MangaPageSecondary  {...mangaPageSecondary[selectMangaPanel]} />
            }

        </section>
    );
}

export { Manga };
