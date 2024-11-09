import { Image } from '@shared-atoms/image';

import imageProject from '@assets-images/personal-projects/sensor-monitoring/demo-2.jpg';

import './style.css';


function MiniatureProjectPreview({ panelActive }) {
    const image = {
        src: imageProject,
        size: 'adaptive',
        objectFit: 'cover'
    };
    const classPanelActive = panelActive ? 'panel-active' : '';

    return (
        <section className={`miniature-project-preview ${classPanelActive}`}>
            <Image {...image} />
        </section>
    );
}

export { MiniatureProjectPreview };
