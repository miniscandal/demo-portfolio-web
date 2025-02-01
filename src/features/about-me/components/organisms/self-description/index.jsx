import { PixelArtDialog } from '@feat-about-me-organisms/pixel-art-dialog';

import { Title } from '@shared-atoms/title';
import { PixelArt } from '@shared-atoms/pixel-art';

import { PIXEL_ART_ITEM_CUP_COFFEE } from '@shared-atoms/pixel-art/variants';
import { PIXEL_ART_ANIME_MINICODE_ANIMATION_V3 } from '@shared-atoms/pixel-art/variants';

import './style.css';


function SelfDescription({
    titleText = 'Self Description',
    dialogTexts = ['Main Self Description', 'Secondary Self Description'],
    pixelArtCharacter = PIXEL_ART_ANIME_MINICODE_ANIMATION_V3,
    pixelArtObjects = [
        () => <PixelArt character={PIXEL_ART_ITEM_CUP_COFFEE} />,
        () => <PixelArt character={PIXEL_ART_ITEM_CUP_COFFEE} />,
        () => <PixelArt character={PIXEL_ART_ITEM_CUP_COFFEE} />,
        () => <PixelArt character={PIXEL_ART_ITEM_CUP_COFFEE} />,
        () => <PixelArt character={PIXEL_ART_ITEM_CUP_COFFEE} />
    ],
    type = 'rectangular-figure'
}) {
    const title = {
        text: titleText,
        type: 'h3',
        color: 'dark'
    };

    const pixelArtDialog = {
        textMain: dialogTexts[0],
        textSecondary: dialogTexts[1],
        character: pixelArtCharacter,
        objects: pixelArtObjects,
        type
    };


    return (
        <section className='self-description'>
            <div className='self-description__div'>
                <Title {...title} />
            </div>
            <PixelArtDialog {...pixelArtDialog} />
        </section>
    );
}

export { SelfDescription };
