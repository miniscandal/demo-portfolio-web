import { Title } from '@shared-atoms/title';
import { Manga } from '@feat-home-personal-software-projects-templates/manga';

import { PERSONAL_PROJECTS } from '@shared-constants/anchor-id';

import './style.css';


function PersonalSoftwareProjects() {
    const title = {
        text: 'DEMONSTRATING MY SKILLS AND KNOWLEDGE',
        color: 'charcoal-grey',
        type: 'h2',
        decorated: true
    };

    return (
        <article id={PERSONAL_PROJECTS} className='personal-software-projects'>
            <Title {...title} />
            <section>
                <Manga />
            </section>
        </article>
    );
}

export { PersonalSoftwareProjects };
