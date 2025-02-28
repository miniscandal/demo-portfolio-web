import { useState, useEffect } from 'react';


function useTypingEffect({ message = 'use-typing-effect' }) {
    const [displayText, setDisplayedText] = useState('');
    const [isTypingComplete, setIsTypingComplete] = useState(false);

    useEffect(() => {
        let index = 0;
        let typingInterval;

        const setIntervalCallback = () => {
            const letter = message.charAt(index);

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
    }, [message]);


    return [displayText, isTypingComplete, setIsTypingComplete];
}


export { useTypingEffect };
