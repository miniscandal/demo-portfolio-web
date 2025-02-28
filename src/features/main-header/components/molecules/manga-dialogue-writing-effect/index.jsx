import { useState, useEffect } from 'react';

import { Paragraph } from '@shared-atoms/paragraph';

import './style.css';

const segmenterTexts = (messages) => {
    const segmenter = new Intl.Segmenter('en', { granularity: 'grapheme' });


    return messages.map(item => {
        const { kaomoji, message, emoji } = item;
        const text = `${kaomoji}\n${message}\n${emoji}`;

        return Array.from(segmenter.segment(text)).map(segment => segment.segment);
    });
};


function MangaDialogueWritingEffect({
    messages = [{
        kaomoji: '(⌒ω⌒)',
        message: '¡No code, no life!',
        emoji: '🖥️❤️'
    },
    {
        kaomoji: '(≧ω≦)',
        message: 'No software, no life',
        emoji: '💾✨'
    },
    {
        kaomoji: '(˶˃ ᵕ ˂˶) .ᐟ.ᐟ',
        message: 'No firmware, no life',
        emoji: '💾✨'
    }],
    size = 'regular',
    speed = 200,
    pauseDuration = 100
}) {
    const [displayedText, setDisplayedText] = useState('');
    const [index, setIndex] = useState(0);
    const [indexText, setIndexText] = useState(0);
    const [isPause, setIsPause] = useState(false);

    useEffect(() => {
        const splitTexts = segmenterTexts(messages);

        const loopDisplayText = ({
            index,
            setIndex,
            setDisplayedText,
            splitTexts,
            indexText,
            setIndexText
        }) => {
            if (isPause) {
                return;
            }

            const currentText = splitTexts[indexText];

            setIndex(prevState => prevState + 1);
            setDisplayedText(prevState => prevState + currentText[index]);

            if (index >= currentText.length - 1) {
                setIndex(0);
                setIsPause(true);

                setTimeout(() => {
                    setIsPause(false);
                    setDisplayedText('');
                    setIndexText(prev => prev < splitTexts.length - 1 ? prev + 1 : 0);
                }, pauseDuration);
            }
        };

        const parameters = { index, setIndex, setDisplayedText, splitTexts, indexText, setIndexText };
        const intervalId = setInterval(loopDisplayText, speed, parameters);

        return () => clearInterval(intervalId);
    }, [messages, index, speed, indexText, isPause, pauseDuration]);

    const classList = [size];

    return (
        <div className={`manga-dialogue-writing-effect ${classList.join(' ')}`}>
            <div className='manga-dialogue-writing-effect__div'>
                <div>
                    <Paragraph text={displayedText} cursorAnimation={true} />
                </div>
            </div>
        </div>
    );
}

export { MangaDialogueWritingEffect };
