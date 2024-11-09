import { Title } from '@shared-atoms/title';
import { ButtonLinkDownloader } from '@shared-molecules/button-link-downloader';
import { ProfessionalContactMethods } from '@shared-organisms/professional-contact-methods';


import cvFile from '@assets-documents/cv-oscar-gonzalez.pdf';

import './style.css';


function ProfessionalContact() {
    const titleH1 = {
        text: 'Oscar González',
        color: 'light-silver',
        type: 'h1'
    };
    const titleH2 = {
        text: 'Computer Systems Engineering',
        color: 'light-silver',
        type: 'h2'
    };
    const buttonLinkDownloader = {
        description: 'Resume',
        href: cvFile
    };

    return (
        <section className="professional-contact">
            <Title {...titleH1} />
            <Title {...titleH2} />
            <ButtonLinkDownloader {...buttonLinkDownloader} />
            <ProfessionalContactMethods />
        </section>
    );
}

export { ProfessionalContact };
