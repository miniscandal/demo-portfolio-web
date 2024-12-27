import { useContext } from 'react';

import { ProfessionalInformationContext } from '@feat-primary-header-contexts/professional-information';

import { Title } from '@shared-atoms/title';
import { ButtonLinkDownloader } from '@shared-molecules/button-link-downloader';

import './style.css';


function ProfessionalInformation() {
    const { name, discipline, fileName, fileHref } = useContext(ProfessionalInformationContext);

    const titleH1 = {
        text: name,
        color: 'light-silver',
        type: 'h1'
    };
    const titleH2 = {
        text: discipline,
        color: 'light-silver',
        type: 'h2'
    };
    const buttonLinkDownloader = {
        name: `${fileName}.pdf`,
        description: 'Resume',
        href: fileHref,
    };

    return (
        <section className='professional-information'>
            <Title {...titleH1} />
            <Title {...titleH2} />
            <ButtonLinkDownloader {...buttonLinkDownloader} />
        </section>
    );
}

export { ProfessionalInformation };
