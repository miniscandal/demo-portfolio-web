import { PixelArtDialog } from '@feat-about-me-molecules/pixel-art-dialog';
import { Title } from '@shared-atoms/title';

import { PIXEL_ART_ANIME_MINICODE_ANIMATION_V2 } from '@shared-atoms/pixel-art/variants';

import './style.css';


function ProfessionalApproach() {
    const title = {
        text: 'My Professional Approach',
        type: 'h3'
    };

    const pixelArtDialog = {
        textMain: 'I am committed to spending meaningful time on professional growth and personal development, aiming to become a skilled principal software engineer.',
        textSecondary: 'My goal is to inspire and guide future engineers. I strongly believe that supporting my peers will help me grow professionally and enrich my life.',
        character: PIXEL_ART_ANIME_MINICODE_ANIMATION_V2
    };


    return (
        <section className='professional-approach'>
            <div className='professional-approach__div'>
                <Title {...title} />
            </div>
            <div className='professional-approach__div'>
                <PixelArtDialog {...pixelArtDialog} />
            </div>
        </section>
    );
}

export { ProfessionalApproach };
