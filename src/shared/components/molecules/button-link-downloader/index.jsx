import { Icon } from '@shared-atoms/icon';

import downloadIcon from '@assets-images/svg/download.svg';

import './style.css';


function ButtonLinkDownloader({
    description = 'File',
    href = '#',
    file = new Blob([], { type: 'text/plain' })
}) {
    const icon = {
        src: downloadIcon,
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
            className='button-link-downloader '
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
