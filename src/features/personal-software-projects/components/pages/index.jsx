import { MangaContextProvider } from '@feat-personal-software-projects-contexts/manga-context';
import { SensorMonitoringProvider } from '@feat-personal-software-projects-contexts/manga-context';

import { Manga } from '@feat-personal-software-projects-organisms/manga';

import { Title } from '@shared-atoms/title';

import './style.css';


function PersonalSoftwareProjects() {
    const title = {
        text: 'PERSONAL PROJECTS',
        color: 'charcoal-grey',
        type: 'h2',
        decorated: true
    };

    return (
        <article className='personal-software-projects'>
            <Title {...title} />
            <section>
                <MangaContextProvider provider={SensorMonitoringProvider}>
                    <Manga />
                </MangaContextProvider>
            </section>
        </article>
    );
}

export { PersonalSoftwareProjects };
