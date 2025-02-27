import { useState, useContext } from 'react';

import { MangaContext } from '@feat-personal-software-projects-contexts/manga-context';

import { Title } from '@shared-atoms/title';
import { PixelArt } from '@shared-atoms/pixel-art';
import { HitBoxButton } from '@shared-molecules/hit-box-button';

import { PIXEL_ART_ANIME_KANAO } from '@shared-atoms/pixel-art/variants';
import { PIXEL_ART_ITEM_STICKY_NOTE_SINGLE } from '@shared-atoms/pixel-art/variants';
import { PIXEL_ART_ITEM_STICKY_NOTE_GROUP } from '@shared-atoms/pixel-art/variants';
import { PIXEL_ART_ITEM_WHITEBOARD } from '@shared-atoms/pixel-art/variants';

import './style.css';


function MangaPanelProjectPlanning({ readingMode = false }) {
    const [ideaIndex, setIdeaIndex] = useState(0);

    const { planning: { ideas } } = useContext(MangaContext);

    const classList = [
        readingMode ? 'reading-mode' : ''
    ];
    const title = {
        text: 'Project Planning',
        color: 'smoky-purple',
        type: 'h4'
    };
    const pixelArtItem = {
        character: PIXEL_ART_ITEM_WHITEBOARD,
        showBox: !true
    };
    const pixelArtItemStickyNoteSingle = {
        character: PIXEL_ART_ITEM_STICKY_NOTE_SINGLE,
        showBox: !true
    };

    const pixelArtItemStickyNoteGroup = {
        character: PIXEL_ART_ITEM_STICKY_NOTE_GROUP,
        showBox: !true
    };
    const hitBoxButton = {
        onClickCallback: (event) => {
            const button = event.target.closest('button');

            setIdeaIndex(Number(button.dataset.index));
        },
        readingMode
    };

    return (
        <section className={`manga-panel-project-planning ${classList.join(' ')}`}>
            <Title {...title} />
            <section>
                <section className='pixel-art__section'>
                    <div className='pixel-art__div'>
                        <PixelArt {...pixelArtItem} />
                    </div>
                    <div className='pixel-art__div--group'>
                        <div>
                            <HitBoxButton {...hitBoxButton} dataSet={{ index: 1 }}>
                                <PixelArt {...pixelArtItemStickyNoteGroup} />
                            </HitBoxButton>
                        </div>
                        <div>
                            <HitBoxButton {...hitBoxButton} dataSet={{ index: 2 }}>
                                <PixelArt {...pixelArtItemStickyNoteSingle} />
                            </HitBoxButton>

                            <HitBoxButton {...hitBoxButton} dataSet={{ index: 0 }}>
                                <PixelArt {...pixelArtItemStickyNoteSingle} />
                            </HitBoxButton>
                        </div>
                    </div>
                </section>
                {
                    readingMode
                    &&
                    <div className='character-speech__div'>
                    </div>
                }
            </section>
        </section>
    );
}

export { MangaPanelProjectPlanning };
