import { useState, useEffect } from 'react';


function useTypingEffect({ message = 'use-typing-effect' }) {
    const [displayText, setDisplayedText] = useState('');
    const [isTypingComplete, setIsTypingComplete] = useState(false);

    useEffect(() => {
        let index = 0;
        let typingInterval;
        const interval = 150;

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
            typingInterval = setInterval(setIntervalCallback, interval);
        }, 500);

        return () => {
            clearTimeout(startTyping);
            clearInterval(typingInterval);
            setDisplayedText('');
            setIsTypingComplete(false);
        };
    }, [message]);


    return [displayText, isTypingComplete, setIsTypingComplete];
}


export { useTypingEffect };
