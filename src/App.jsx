import { MangaContext } from '@feat-home-personal-software-projects-contexts/manga-context';
import { ProviderProjectSensorMonitoring } from '@feat-home-personal-software-projects-contexts/manga-context';
import { Manga } from '@feat-home-personal-software-projects-organisms/manga';

// import { RootHome } from '@feat-home-root/index';

import './App.css';
import { MangaPrimarySideBar } from '@feat-home-personal-software-projects-organisms/manga-primary-side-bar';
import { MangaDialog } from '@shared-molecules/manga-dialog';
import { CharacterSpeech } from '@shared-molecules/character-speech';


function App() {
    const provider = {
        projectData: ProviderProjectSensorMonitoring,
    };

    return (
        <>
            <MangaContext.Provider value={provider}>
                {/* <MangaDialog /> */}
                <Manga />
            </MangaContext.Provider>
        </>
    );
}

export default App;
