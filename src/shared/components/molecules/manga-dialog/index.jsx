import { useState, useEffect, useRef } from 'react';

import { Paragraph } from '@shared-atoms/paragraph';

import './style.css';


function MangaDialog({
    text,
    size = 'regular',
    animateText = false
}) {
    const [displayedText, setDisplayedText] = useState('');
    const currentIndex = useRef(0);
    const animationFrame = useRef(null);

    const lastUpdateTime = useRef(null);

    useEffect(() => {
        setDisplayedText('');
        currentIndex.current = -1;

        if (!animateText) {
            setDisplayedText(text);

            return;
        }


        function updateText(timestamp) {
            if (!lastUpdateTime.current) {
                lastUpdateTime.current = timestamp;
            }

            const elapsed = timestamp - lastUpdateTime.current;

            if (elapsed >= 60) {
                lastUpdateTime.current = timestamp;
                currentIndex.current += 1;
                setDisplayedText((prev) => prev + text[currentIndex.current]);
            }

            if (currentIndex.current < text.length - 1) {
                animationFrame.current = requestAnimationFrame(updateText);
            }

        }

        animationFrame.current = requestAnimationFrame(updateText);


        return () => {
            cancelAnimationFrame(animationFrame.current);
        };
    }, [text, animateText]);

    const paragraph = {
        text: displayedText,
        color: 'charcoal-grey'
    };

    return (
        <div className={`manga-dialog ${size}`}>
            <div>
                <Paragraph {...paragraph} />
            </div>
            <div>
            </div>
        </div>
    );
}

export { MangaDialog };
