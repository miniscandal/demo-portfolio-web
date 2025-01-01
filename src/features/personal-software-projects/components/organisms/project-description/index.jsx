import { Title } from '@shared-atoms/title';
import { Paragraph } from '@shared-atoms/paragraph';
import { PixelArtCharacter } from '@shared-atoms/pixel-art';

import './style.css';

function ProjectDescription() {

    return (
        <section>
            <Title />
            <Paragraph />
            <PixelArtCharacter />
        </section>
    );
}

export { ProjectDescription };
