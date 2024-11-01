import { Icon } from '@shared-atoms/icon';

import './style.css';


function HyperlinkIcon({ href, iconSrc }) {
    const classList = [];
    const icon = {
        src: iconSrc,
        color: 'light',
        size: 'auto'
    };

    return (
        <a className={`hyperlink-icon ${classList.join(' ')}`} href={href}>
            <Icon {...icon} />
        </a>
    );
}

export { HyperlinkIcon };
