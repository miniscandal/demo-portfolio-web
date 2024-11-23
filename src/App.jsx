import { MangaContext } from '@feat-home-personal-software-projects-contexts/manga-context';
import { ProviderProjectSensorMonitoring } from '@feat-home-personal-software-projects-contexts/manga-context';
import { Manga } from '@feat-home-personal-software-projects-organisms/manga';

// import { RootHome } from '@feat-home-root/index';

import './App.css';


function App() {
    const provider = {
        projectData: ProviderProjectSensorMonitoring,
    };

    return (
        <>
            <MangaContext.Provider value={provider}>
                <Manga />
            </MangaContext.Provider>
        </>
    );
}

export default App;
