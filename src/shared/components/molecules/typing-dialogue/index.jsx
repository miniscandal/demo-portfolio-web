import { useTypingEffect } from '@shared-custom-hooks/use-typing-effect';

import { MangaDialogue } from '@shared-molecules/manga-dialogue';
import { Paragraph } from '@shared-atoms/paragraph';
import { PixelArt } from '@shared-atoms/pixel-art';

import './style.css';


function TypingDialogue({
    message = 'Typing Dialogue',
    character = undefined
}) {
    const [displayText] = useTypingEffect({ message });


    return (
        <div className='typing-dialogue'>
            <MangaDialogue size='regular'>
                <Paragraph text={displayText} cursorAnimation={true} />
            </MangaDialogue>
            <PixelArt character={character} size='regular' />
        </div>
    );
}

export { TypingDialogue };
