import { useContext } from 'react';

import { MangaContext } from '@feat-home-personal-software-projects-contexts/manga-context';

import { Title } from '@shared-atoms/title';
import { PixelArt } from '@shared-molecules/pixel-art';
import { CharacterSpeech } from '@shared-molecules/character-speech';

import { PIXEL_ART_ANIME_KANAO } from '@shared-molecules/pixel-art/variants';
import { PIXEL_ART_ITEM_STICKY_NOTE_SINGLE } from '@shared-molecules/pixel-art/variants';
import { PIXEL_ART_ITEM_STICKY_NOTE_GROUP } from '@shared-molecules/pixel-art/variants';
import { PIXEL_ART_ITEM_WHITEBOARD } from '@shared-molecules/pixel-art/variants';

import './style.css';


function MangaPanelProjectPlanning({ readingMode = false }) {
    const { projectData: { planning: { ideas } } } = useContext(MangaContext);

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
    const characterSpeech = {
        text: ideas[0],
        character: PIXEL_ART_ANIME_KANAO,
        animateText: readingMode
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
                            <PixelArt {...pixelArtItemStickyNoteGroup} />
                        </div>
                        <div>
                            <PixelArt {...pixelArtItemStickyNoteSingle} />
                            <PixelArt {...pixelArtItemStickyNoteSingle} />
                        </div>
                    </div>
                </section>
                {
                    readingMode
                    &&
                    <div className='character-speech__div'>
                        <CharacterSpeech {...characterSpeech} />
                    </div>
                }
            </section>
        </section>
    );
}

export { MangaPanelProjectPlanning };
