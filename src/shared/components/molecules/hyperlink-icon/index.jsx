import { Icon } from '@shared-atoms/icon';

import './style.css';


function HyperlinkIcon({ href, iconSrc }) {
    const icon = {
        src: iconSrc,
        color: 'light'
    };

    return (
        <a className='hyperlink-icon' href={href} target='_blank'>
            <Icon {...icon} />
        </a>
    );
}

export { HyperlinkIcon };
