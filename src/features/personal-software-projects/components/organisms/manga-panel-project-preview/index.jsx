import { Image } from '@shared-atoms/image';

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
            <Image {...image} />
        </section>
    );
}

export { MangaPanelProjectPreview };
