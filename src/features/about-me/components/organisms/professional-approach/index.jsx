import { Title } from '@shared-atoms/title';
import { PixelArtDialog8Bit } from '@feat-about-me-molecules/pixel-art-dialog-8-bit';

import { PIXEL_ART_ANIME_MINICODE_ANIMATION_V2 } from '@shared-molecules/pixel-art/variants';

import './style.css';


function ProfessionalApproach() {
    const title = {
        text: 'My Professional Approach',
        type: 'h3'
    };

    const pixelArtDialog8Bit = {
        textMain: `Enfocado en didicar tiempo significativo a mi aprendizaje profesional y desarrollo personal con el objetivo de alcanzar las habilidades de un ingeniero principal de software.`,
        textSecondary: `Aspiro a guiar e inspirar a futuros ingenieros en formación. Creo firmemente que al apoyar a mis compañeros, avanzaré en mi carrera profesional y enriqueceré aspectos importantes de mi vida.`,
        character: PIXEL_ART_ANIME_MINICODE_ANIMATION_V2
    };


    return (
        <section className='professional-approach'>
            <Title {...title} />
            <div className='professional-approach__div'>
                <PixelArtDialog8Bit {...pixelArtDialog8Bit} />
            </div>
        </section>
    );
}

export { ProfessionalApproach };
