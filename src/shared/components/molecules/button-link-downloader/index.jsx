import { Icon } from '@shared-atoms/icon';

import download from '@assets-images/svg/download.svg';

import './style.css';


function ButtonLinkDownloader({
    description = 'File',
    href = '#',
    file = new Blob([], { type: 'text/plain' }),
    bgColor = 'olive-green',
    iconSrc = download,
    size = 'regular',
    color = 'light'
}) {
    const classList = [
        bgColor,
        size,
        color
    ];
    const icon = {
        src: iconSrc,
        size: 'regular'
    }
    const handleClick = () => {
        const a = document.createElement('a');
        a.href = file;
        a.download = href;
        a.click();
    };

    return (
        <a
            className={`button-link-downloader ${classList.join(' ')}`}
            href={href}
            target='_blanck'
            onClick={handleClick}
        >
            Download {description}
            <Icon {...icon} />
        </a >
    );
}

export { ButtonLinkDownloader };
