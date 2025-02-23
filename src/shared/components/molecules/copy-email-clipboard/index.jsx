import { useState } from 'react';

import { Paragraph } from '@shared-atoms/paragraph';

import './style.css';


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

    return (
        <div className={`copy-email-clipboard ${classList.join(' ')}`} onClick={handleClick}>
            <Paragraph text='copy my contact email to clipboard' />
        </div>
    );
}

export { CopyEmailClipboard };
