import { Icon } from '@shared-atoms/icon';

import svgFileSave from '@assets-images/svg/file-save.svg';

import './style.css';


function ButtonLinkDownloader({
    name = 'file.txt',
    description = 'File',
    href = '#',
    file = new Blob([], { type: 'text/plain' })
}) {
    const handleClick = () => {
        const a = document.createElement('a');
        a.href = href === '#' ? href : file;
        a.download = name;
        a.click();
    };

    return (
        <a className='button-link-downloader ' href={href} target='_blanck' onClick={handleClick}>
            Download {description}
            <Icon src={svgFileSave} size='regular' />
        </a>
    );
}

export { ButtonLinkDownloader };
