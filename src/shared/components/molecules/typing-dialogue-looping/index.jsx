import { useState } from 'react';

import { useTypingEffect } from '@shared-custom-hooks/use-typing-effect';

import { MangaDialogue } from '@shared-molecules/manga-dialogue';
import { Paragraph } from '@shared-atoms/paragraph';
import { PixelArt } from '@shared-atoms/pixel-art';

import './style.css';


function TypingDialogueLooping({
    messages = ['Cycling', 'Typing', 'Effect'],
    character = undefined
}) {
    const [indexText, setIndexText] = useState(0);
    const [displayText, isTypingComplete, setIsTypingComplete] = useTypingEffect({
        message: messages[indexText]
    });

    if (isTypingComplete) {
        setIsTypingComplete(false);
        setTimeout(() => {
            setIndexText(prev => (prev === messages.length - 1) ? 0 : prev + 1);
        }, 1000);
    }


    return (
        <div className='typing-dialogue-looping'>
            <MangaDialogue size='regular'>
                <Paragraph text={displayText} cursorAnimation={true} />
            </MangaDialogue>
            <PixelArt character={character} size='regular' />
        </div>
    );
}

export { TypingDialogueLooping };
