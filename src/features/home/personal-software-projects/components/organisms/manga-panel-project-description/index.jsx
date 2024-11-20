import { useState, useContext } from 'react';

import { MangaContext } from '@feat-home-personal-software-projects-contexts/manga-context';

import { Title } from '@shared-atoms/title';

import { CharacterSpeech } from '@shared-molecules/character-speech';
import { PixelArt } from '@shared-molecules/pixel-art';
import { IconButton } from '@shared-molecules/icon-button';
import { IconFontSvg } from '@shared-atoms/icon-font-svg';
import { ArrowDown } from '@shared-atoms/icon-font-svg/variants';

import { PIXEL_ART_ANIME_RINTARO } from '@shared-molecules/pixel-art/variants';
import { PIXEL_ART_ITEM_DESK } from '@shared-molecules/pixel-art/variants';

import './style.css';


function MangaPanelProjectDescription({ readingMode = false }) {
    const [descriptionIndex, setDescriptionIndex] = useState(0);
    const { projectData: { name, descriptions } } = useContext(MangaContext);
    const classList = [
        'manga-panel-project-description',
        readingMode ? 'reading-mode' : ''
    ];
    const title = {
        text: name,
        color: 'smoky-purple',
        type: 'h3'
    };
    const characterSpeech = {
        text: descriptions[descriptionIndex],
        character: PIXEL_ART_ANIME_RINTARO
    };
    const pixelArt = {
        character: PIXEL_ART_ITEM_DESK
    };
    const iconFontSvg = {
        svg: ArrowDown,
        color: 'olive-green',
        size: 'small'
    };
    const iconButton = {
        handleClick: () => {
            setDescriptionIndex(descriptionIndex + 1);
        }
    };

    return (
        <section className={classList.join(' ')}>
            <Title {...title} />
            <section>
                {
                    readingMode
                    &&
                    <>
                        <div className='icon-font-svg__div'>
                            <IconFontSvg {...iconFontSvg} />
                        </div>

                        <div className='icon-button__div'>
                            <IconButton {...iconButton} />
                        </div>

                        <div className='pixel-art__div'>
                            <PixelArt {...pixelArt} />
                        </div>
                    </>
                }
                <div className='character-speech__div'>
                    <CharacterSpeech {...characterSpeech} />
                </div>
            </section>
        </section>
    );
}

export { MangaPanelProjectDescription };
