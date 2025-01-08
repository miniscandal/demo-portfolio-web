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
            <div className='personal-software-projects__div'>
                <DecoratedTitle {...decorateTitle} />
            </div>
            <section>
                <MangaContextProvider provider={SensorMonitoringProvider}>
                    <Manga />
                </MangaContextProvider>
            </section>
        </article>
    );
}

export { PersonalSoftwareProjects };
