import { useState, useEffect } from 'react';

import { Paragraph } from '@shared-atoms/paragraph';

import './style.css';


function MangaDialog({
    texts = ['Manga', 'Dialog'],
    size = 'regular',
    speed = 200,
    pauseDuration = 100
}) {
    const [displayedText, setDisplayedText] = useState('');
    const [index, setIndex] = useState(0);
    const [indexText, setIndexText] = useState(0);
    const [isPause, setIsPause] = useState(false);

    useEffect(() => {
        const loopDisplayText = ({
            index,
            setIndex,
            setDisplayedText,
            texts, indexText,
            setIndexText
        }) => {
            if (isPause) {
                return;
            }

            setIndex((prevState) => prevState += 1);
            setDisplayedText((prevState) => prevState += texts[indexText][index]);

            if (index >= texts[indexText].length - 1) {
                setIndex(0);
                setIsPause(true);

                setTimeout(() => {
                    setIsPause(false);
                    setDisplayedText('');

                    if (indexText < texts.length - 1) {
                        setIndexText((prevState) => prevState += 1);
                    } else {
                        setIndexText(0);
                    }
                }, pauseDuration);
            }
        };

        const parameters = { index, setIndex, setDisplayedText, texts, indexText, setIndexText };
        const intervalId = setInterval(loopDisplayText, speed, parameters);

        return () => clearInterval(intervalId);

    }, [texts, index, speed, indexText, isPause, pauseDuration]);

    const classList = [
        size
    ];
    const paragraph = {
        text: displayedText,
        color: 'charcoal-grey'
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
