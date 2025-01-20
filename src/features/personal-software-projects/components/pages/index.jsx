import { MangaContextProvider } from '@feat-personal-software-projects-contexts/manga-context';
import { SensorMonitoringProvider } from '@feat-personal-software-projects-contexts/manga-context';
import { Manga } from '@feat-personal-software-projects-organisms/manga';

import { DecoratedTitle } from '@shared-molecules/decorated-title';

import './style.css';


function PersonalSoftwareProjects() {
    const decorateTitle = {
        text: 'PERSONAL PROJECTS',
        color: 'charcoal-grey'
    };

    return (
        <article className='personal-software-projects'>
            <header>
                <DecoratedTitle {...decorateTitle} />
            </header>
            <section>
                <MangaContextProvider provider={SensorMonitoringProvider}>
                    <Manga />
                </MangaContextProvider>
            </section>
        </article>
    );
}

export { PersonalSoftwareProjects };
