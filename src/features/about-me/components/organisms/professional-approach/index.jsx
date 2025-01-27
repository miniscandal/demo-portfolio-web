import { useContext } from 'react';

import { ProfessionalApproachContext } from '@feat-about-me-contexts/professional-approach';

import { PixelArtDialog } from '@feat-about-me-organisms/pixel-art-dialog';

import { Title } from '@shared-atoms/title';

import { PIXEL_ART_ANIME_MINICODE_ANIMATION_V2 } from '@shared-atoms/pixel-art/variants';

import './style.css';


function ProfessionalApproach() {
    const { goals } = useContext(ProfessionalApproachContext);

    const title = {
        text: 'My Professional Approach',
        type: 'h3',
        color: 'light'
    };

    const pixelArtDialog = {
        textMain: goals[0],
        textSecondary: goals[1],
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
