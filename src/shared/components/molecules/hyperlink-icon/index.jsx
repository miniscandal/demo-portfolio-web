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
    const icon = {
        src: iconSrc
    };

    return (
        <a className={`hyperlink-icon ${classList.join(' ')}`} href={href} target='_blank'>
            <Icon {...icon} />
        </a>
    );
}

export { HyperlinkIcon };
