import { Icon } from '@shared-atoms/icon';

import './style.css';


function HyperlinkIcon({ href, iconSrc, size = 'regular' }) {
    const icon = {
        src: iconSrc,
        color: 'light',
        size: 'medium'
    };

    return (
        <a className='hyperlink-icon' href={href} target='_blank'>
            <Icon {...icon} />
        </a>
    );
}

export { HyperlinkIcon };
