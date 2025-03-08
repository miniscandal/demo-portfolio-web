import { MangaProvider } from '@feat-personal-software-projects-contexts/manga-context';
import { ProviderSensorMonitoring } from '@feat-personal-software-projects-contexts/manga-context';
import { Manga } from '@feat-personal-software-projects-organisms/manga';

import { DecoratedTitle } from '@shared-molecules/decorated-title';

import './style.css';


function PersonalSoftwareProjects() {

    return (
        <section className='personal-software-projects'>
            <DecoratedTitle text='PERSONAL PROJECTS' />
            <MangaProvider provider={ProviderSensorMonitoring}>
                <Manga />
            </MangaProvider>
        </section>
    );
}

export { PersonalSoftwareProjects };
