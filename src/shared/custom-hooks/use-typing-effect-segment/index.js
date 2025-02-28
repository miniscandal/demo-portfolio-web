import { useState, useEffect } from 'react';


function useTypingEffectSegment({
    id = 'message_01',
    message = [
        'U', 's', 'e', ' ',
        'T', 'y', 'p', 'i', 'n', 'g', ' ',
        'T', 'y', 'p', 'i', 'n', 'g', ' ',
        'T', 'y', 'p', 'i', 'n', 'g', ' ',
        'E', 'f', 'f', 'e', 'c', 't', ' ',
        'S', 'e', 'g', 'm', 'e', 'n', 't', '🖥️'
    ],
}) {
    const [displayText, setDisplayedText] = useState('');
    const [isTypingComplete, setIsTypingComplete] = useState(false);

    useEffect(() => {
        let index = 0;
        let typingInterval;

        const setIntervalCallback = () => {
            const letter = message[index];

            setDisplayedText(prev => prev + letter);
            index++;

            if (index >= message.length) {
                clearTimeout(startTyping);
                clearInterval(typingInterval);
                setIsTypingComplete(true);
            }
        };

        const startTyping = setTimeout(() => {
            typingInterval = setInterval(setIntervalCallback, 150);
        }, 500);

        return () => {
            clearTimeout(startTyping);
            clearInterval(typingInterval);
            setDisplayedText('');
        };
    }, [id, message]);


    return [displayText, isTypingComplete, setIsTypingComplete];
}


export { useTypingEffectSegment };
