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
            </section>
        </article>
    );
}

export { PersonalSoftwareProjects };
