import { useState } from 'react';

import { MangaPanel } from '@feat-home-personal-software-projects-templates/manga-panel';
import { UnorderedList } from '@shared-molecules/unordered-list';
import { IconButton } from '@shared-molecules/icon-button';
import { ArrowBack } from '@shared-atoms/icon-font-svg/variants';
import { MangaPanelProjectDescription } from '@feat-home-personal-software-projects-molecules/manga-panel-project-description';
import { MiniatureProjectPreview } from '@feat-home-personal-software-projects-molecules/miniature-project-preview';
import { MangaPanelAppliedConcepts } from '@feat-home-personal-software-projects-molecules/manga-panel-applied-concepts';
import { MangaPanelProjectPlanning } from '@feat-home-personal-software-projects-molecules/manga-panel-project-planning';

import './style.css';


function MangaPageMain() {
    const [idSelected, setIdSelected] = useState('');

    const handleClick = (liElement) => {
        const id = liElement.dataset.id;

        setIdSelected(id);
    };
    const items = [
        {
            id: 'panel-one',
            text: 'Ep 01',
            ChildrenComponent: MangaPanelProjectDescription
        },
        {
            id: 'panel-two',
            text: 'Ep 02',
            ChildrenComponent: MangaPanelProjectPlanning
        },
        {
            id: 'panel-three',
            text: 'Ep 03',
            ChildrenComponent: MangaPanelAppliedConcepts
        },
        {
            id: 'panel-for',
            text: 'Ep 04',
            ChildrenComponent: MiniatureProjectPreview
        },
    ];
    const iconButton = {
        svg: ArrowBack,
        handleClick: () => { setIdSelected(''); }
    };
    const unorderedList = {
        idSelected,
        Component: MangaPanel,
        items,
        handleClick
    };

    return (
        <section className='manga-page-main'>
            <UnorderedList {...unorderedList} />
            {idSelected !== ''
                ? <IconButton {...iconButton} />
                : null
            }
        </section>
    );
}

export { MangaPageMain };
