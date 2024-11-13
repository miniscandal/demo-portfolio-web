import { useContext } from 'react';

import { MangaContext } from '@feat-home-personal-software-projects-contexts/manga-context';

import { MangaPanelProjectDescription } from '@feat-home-personal-software-projects-organisms/manga-panel-project-description';
import { MangaPanelProjectPreview } from '@feat-home-personal-software-projects-organisms/manga-panel-project-preview';
import { MangaPanelProjectAppliedConcepts } from '@feat-home-personal-software-projects-organisms/manga-panel-project-applied-concepts';
import { MangaPanelProjectPlanning } from '@feat-home-personal-software-projects-organisms/manga-panel-project-planning';

import { UnorderedList } from '@shared-molecules/unordered-list';

import { MPP_DESCRIPTION_ID } from '@feat-home-personal-software-projects-constants/manga-panel-identifiers';
import { MPP_PLANNING_ID } from '@feat-home-personal-software-projects-constants/manga-panel-identifiers';
import { MPP_TECH_ECOSYSTEM_ID } from '@feat-home-personal-software-projects-constants/manga-panel-identifiers';
import { MPP_PREVIEW_ID } from '@feat-home-personal-software-projects-constants/manga-panel-identifiers';


import './style.css';


function MangaPageMain() {
    const { elements: { unorderedList } } = useContext(MangaContext);

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

    return (
        <section className='manga-page-main'>
            <UnorderedList {...unorderedList} items={items} id='manga-page-main' />
        </section>
    );
}

export { MangaPageMain };
