import { PixelArtCharacter } from '@shared-molecules/pixel-art-character';

import { PIXEL_ART_HAMTARO } from '@shared-constants/pixel-art-characters';

import './style.css';


function KnowledgeInformation({
    name: text = 'Knowledge Information',
    color: bgColor = 'lightpink',
}) {
    const pixelArtCharacter = {
        size: 'small',
        character: PIXEL_ART_HAMTARO,
        showContainer: false
    };

    return (
        <a className='knowledge-information' style={{ backgroundColor: bgColor }}>
            {text}
            <div>
                <PixelArtCharacter {...pixelArtCharacter} />
            </div>
        </a>
    );
}

export { KnowledgeInformation };
