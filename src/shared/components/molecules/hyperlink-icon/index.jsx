import { Icon } from '@shared-atoms/icon';

import './style.css';


function HyperlinkIcon({
    href,
    iconSrc,
    size = 'regular'
}) {
    const classList = [
        size
    ];

    return (
        <a className={`hyperlink-icon ${classList.join(' ')}`} href={href} target='_blank'>
            <Icon src={iconSrc} />
        </a>
    );
}

export { HyperlinkIcon };
