import { Title } from '@shared-atoms/title';
import { Paragraph } from '@shared-atoms/paragraph';
import { PixelArtCharacter } from '@shared-molecules/pixel-art-character';

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
