import { useState } from 'react';
import { MangaContext } from '@feat-home-personal-software-projects-contexts/manga-context';
import { ProviderProjectSensorMonitoring } from '@feat-home-personal-software-projects-contexts/manga-context';
import { MangaPanel } from '@feat-home-personal-software-projects-organisms/manga-panel';

import { RootHome } from '@feat-home-root/index';

import { Manga } from '@feat-home-personal-software-projects-organisms/manga';

import './App.css';


function App() {
    const [selectMangaPanel, setSelectMangaPanel] = useState({
        mainId: null,
        secondaryId: null,
        selectListItemId: null
    });

    const handleClick = (listItem, ulId) => {
        const id = listItem.dataset.id;
        const { mainId, secondaryId } = selectMangaPanel;

        setSelectMangaPanel({
            mainId: ulId === 'manga-page-main' ? id : mainId,
            secondaryId: ulId === 'manga-page-secondary' ? id : secondaryId,
            selectListItemId: id
        });
    };
    const unorderedList = {
        selectListItemId: selectMangaPanel.selectListItemId,
        Component: MangaPanel,
        handleClick
    };
    const provider = {
        projectData: ProviderProjectSensorMonitoring,
        useStates: {
            mangaPanel: [selectMangaPanel, setSelectMangaPanel]
        },
        elements: {
            unorderedList
        }
    };

    return (
        <>
            <MangaContext.Provider value={provider}>
                <Manga />
            </MangaContext.Provider>
            {/* <RootHome /> */}
        </>
    );
}

export default App;
