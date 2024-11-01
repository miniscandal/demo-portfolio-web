import { useState } from 'react';

import './style.css';


/**
 * 
 * The duration of the timeout (3500ms) in this JavaScript code should match the
 * duration specified in the CSS variable (--animation-fade-out: fade-out 3.5s 1) to
 * ensure a consistent user experience.
 * 
 */


function CopyEmailClipboard({ color = 'light' }) {
    const [copied, setCopied] = useState(false);

    const classList = [
        color,
        copied ? 'copied-clipboard' : ''
    ];

    const handleClick = () => {
        const email = 'oscar01dev@gmail.com';
        navigator.clipboard.writeText(email);
        setCopied(true);
        setTimeout(() => {
            setCopied(false);
        }, 3500);
    };

    return (
        <p className={`copy-email-clipboard ${classList.join(' ')}`} onClick={handleClick}>
            copy email to clipboard
        </p>
    );
}

export { CopyEmailClipboard };
