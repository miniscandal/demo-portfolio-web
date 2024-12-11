import { MangaContext } from '@feat-personal-software-projects-contexts/manga-context';
import { ProviderProjectSensorMonitoring } from '@feat-personal-software-projects-contexts/manga-context';

import { Manga } from '@feat-personal-software-projects-organisms/manga';

import { Title } from '@shared-atoms/title';

import './style.css';


function PersonalSoftwareProjects() {
    const provider = {
        projectData: ProviderProjectSensorMonitoring
    };

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
                <MangaContext.Provider value={provider}>
                    <Manga />
                </MangaContext.Provider>
            </section>
        </article>
    );
}

export { PersonalSoftwareProjects };
