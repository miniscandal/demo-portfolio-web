import { useState } from 'react';

import { Paragraph } from '@shared-atoms/paragraph';

import './style.css';


/**
 * 
 * The duration of the timeout (3500ms) in this JavaScript code should match the
 * duration specified in the CSS variable (--animation-fade-out: fade-out 3.5s 1) to
 * ensure a consistent user experience.
 * 
 */

function CopyEmailClipboard({
    email = 'email@email.com'
}) {
    const [copied, setCopied] = useState(false);
    const classList = [
        copied ? 'copied-clipboard' : ''
    ];
    const handleClick = () => {
        navigator.clipboard.writeText(email);
        setCopied(true);
        setTimeout(() => {
            setCopied(false);
        }, 3500);
    };
    const paragraph = {
        text: 'copy email to clipboard'
    };

    return (
        <div className={`copy-email-clipboard ${classList.join(' ')}`} onClick={handleClick}>
            <Paragraph {...paragraph} />
        </div>
    )
}

export { CopyEmailClipboard };
