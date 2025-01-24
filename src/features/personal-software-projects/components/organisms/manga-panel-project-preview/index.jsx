import { Picture } from '@shared-atoms/picture';

import imageProject from '@assets-images/personal-projects/sensor-monitoring/demo-2.jpg';

import './style.css';


function MangaPanelProjectPreview({ panelActive }) {
    const image = {
        src: imageProject,
        size: 'adaptive',
        objectFit: 'cover'
    };
    const classPanelActive = panelActive ? 'panel-active' : '';

    return (
        <section className={`manga-panel-project-preview ${classPanelActive}`}>
            <Picture {...image} />
        </section>
    );
}

export { MangaPanelProjectPreview };
