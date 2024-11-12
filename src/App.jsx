import { useState } from 'react';
import { MangaContext } from '@feat-home-personal-software-projects-contexts/manga-context';
import { ProviderProjectSensorMonitoring } from '@feat-home-personal-software-projects-contexts/manga-context';
import { MangaPanel } from '@feat-home-personal-software-projects-organisms/manga-panel';

import { RootHome } from '@feat-home-root/index';

import { Manga } from '@feat-home-personal-software-projects-organisms/manga';

import './App.css';


function App() {
    const [selectMangaPanel, setSelectMangaPanel] = useState(null);

    const handleClick = (listItem) => {
        const id = listItem.dataset.id;

        setSelectMangaPanel(id);
    };

    const unorderedList = {
        selectListItem: selectMangaPanel,
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
