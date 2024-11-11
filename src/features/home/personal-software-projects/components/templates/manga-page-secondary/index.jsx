import { useState } from 'react';

import { IconButton } from '@shared-molecules/icon-button';
import { MangaPanel } from '@feat-home-personal-software-projects-templates/manga-panel';
import { UnorderedList } from '@shared-molecules/unordered-list';
import { MangaPanelProjectDescription } from '@feat-home-personal-software-projects-molecules/manga-panel-project-description';
import { ArrowBack } from '@shared-atoms/icon-font-svg/variants';

import './style.css';


function MangaPageSecondary({
    panelOne = {
        id: 'panel-one',
        text: 'Sc 01',
        ChildrenComponent: MangaPanelProjectDescription
    },
    panelTwo = {
        id: 'panel-two',
        text: 'Sc 02',
        ChildrenComponent: MangaPanelProjectDescription
    }
}) {
    const [idSelected, setIdSelected] = useState('');

    const handleClick = (liElement) => {
        const id = liElement.dataset.id;

        setIdSelected(id);
    };
    const iconButton = {
        svg: ArrowBack,
        handleClick: () => { setIdSelected(''); }
    };
    const items = [
        panelOne,
        panelOne,
        panelTwo
    ];
    const unorderedList = {
        idSelected,
        Component: MangaPanel,
        items,
        handleClick
    };

    return (
        <section className='manga-page-secondary'>
            <UnorderedList {...unorderedList} />
            {idSelected !== ''
                ? <IconButton {...iconButton} />
                : null
            }
        </section>
    );
}

export { MangaPageSecondary };
