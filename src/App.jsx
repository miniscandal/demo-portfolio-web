import { MangaContext } from '@feat-home-personal-software-projects-contexts/manga-context';
import { ProviderProjectSensorMonitoring } from '@feat-home-personal-software-projects-contexts/manga-context';
import { Manga } from '@feat-home-personal-software-projects-organisms/manga';

import { RootHome } from '@feat-home-root/index';

import './App.css';
import { MangaPanelProjectPlanning } from '@feat-home-personal-software-projects-organisms/manga-panel-project-planning';


function App() {
    const provider = {
        projectData: ProviderProjectSensorMonitoring,
    };

    return (
        <>
            <MangaContext.Provider value={provider}>
                <Manga />
                {/* <RootHome /> */}
            </MangaContext.Provider>
        </>
    );
}

export default App;
