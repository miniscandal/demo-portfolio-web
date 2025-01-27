import { useState, useEffect } from 'react';

import { Paragraph } from '@shared-atoms/paragraph';

import './style.css';

function MangaDialog({
    texts = ['Manga', 'Dialog', '😊🚀'],
    size = 'regular',
    speed = 200,
    pauseDuration = 100
}) {
    const [displayedText, setDisplayedText] = useState('');
    const [index, setIndex] = useState(0);
    const [indexText, setIndexText] = useState(0);
    const [isPause, setIsPause] = useState(false);

    useEffect(() => {
        const segmenter = new Intl.Segmenter('en', { granularity: 'grapheme' });
        const splitTexts = texts.map(text =>
            Array.from(segmenter.segment(text)).map(segment => segment.segment)
        );

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

                    if (indexText < splitTexts.length - 1) {
                        setIndexText(prevState => prevState + 1);
                    } else {
                        setIndexText(0);
                    }
                }, pauseDuration);
            }
        };

        const parameters = { index, setIndex, setDisplayedText, splitTexts, indexText, setIndexText };
        const intervalId = setInterval(loopDisplayText, speed, parameters);

        return () => clearInterval(intervalId);
    }, [texts, index, speed, indexText, isPause, pauseDuration]);

    const classList = [size];
    const paragraph = {
        text: displayedText,
        color: 'charcoal-grey',
        cursorAnimation: true
    };

    return (
        <div className={`manga-dialog ${classList.join(' ')}`}>
            <div className='manga-dialog__div'>
                <div>
                    <Paragraph {...paragraph} />
                </div>
            </div>
        </div>
    );
}

export { MangaDialog };
