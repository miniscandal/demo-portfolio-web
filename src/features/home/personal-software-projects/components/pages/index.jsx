import { Title } from '@shared-atoms/title';
import { MangaPageMain } from '@feat-home-personal-software-projects-organisms/manga-page-main';

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
                <MangaPageMain />
            </section>
        </article>
    );
}

export { PersonalSoftwareProjects };
