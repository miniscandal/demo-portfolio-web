import { useState } from 'react';

import { MangaPanel } from '@feat-home-personal-software-projects-templates/manga-panel';
import { UnorderedList } from '@shared-molecules/unordered-list';
import { IconButton } from '@shared-molecules/icon-button';
import { ArrowBack } from '@shared-atoms/icon-font-svg/variants';
import { MiniatureProjectDescription } from '@feat-home-personal-software-projects-molecules/miniature-project-description';
import { MiniatureProjectPreview } from '@feat-home-personal-software-projects-molecules/miniature-project-preview';

import './style.css';


function Manga() {
    const [idSelected, setIdSelected] = useState('');

    const handleClick = (liElement) => {
        const id = liElement.dataset.id;

        setIdSelected(id);
    };
    const items = [
        {
            id: 'panel-one',
            text: 'Ep 01',
            ChildrenComponent: MiniatureProjectDescription
        },
        {
            id: 'panel-two',
            text: 'Ep 02',
            ChildrenComponent: MiniatureProjectDescription
        },
        {
            id: 'panel-three',
            text: 'Ep 03',
            ChildrenComponent: MiniatureProjectDescription
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
        <section className='manga'>
            <UnorderedList {...unorderedList} />
            {idSelected !== ''
                ? <IconButton {...iconButton} />
                : null
            }
        </section>
    );
}

export { Manga };
