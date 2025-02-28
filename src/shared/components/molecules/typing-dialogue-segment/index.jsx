import { useState } from 'react';

import { useTypingEffectSegment } from '@shared-custom-hooks/use-typing-effect-segment';

import { MangaDialogue } from '@shared-molecules/manga-dialogue';
import { Paragraph } from '@shared-atoms/paragraph';

import './style.css';


function TypingDialogueSegmentLooping({
    messages = undefined
}) {
    const [indexText, setIndexText] = useState(0);
    const [displayText, isTypingComplete, setIsTypingComplete] = useTypingEffectSegment({
        id: messages[indexText].id,
        message: messages[indexText].message
    });

    if (isTypingComplete) {
        setIsTypingComplete(false);
        setTimeout(() => {
            setIndexText(prev => (prev === messages.length - 1) ? 0 : prev + 1);
        }, 1000);
    }


    return (
        <div className='typing-dialogue-segment-looping'>
            <MangaDialogue size='regular'>
                <Paragraph text={displayText} cursorAnimation={true} />
            </MangaDialogue>
        </div>
    );
}

export { TypingDialogueSegmentLooping };
