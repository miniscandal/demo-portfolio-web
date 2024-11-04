import { Title } from '@shared-atoms/title';
import { ButtonLinkDownloader } from '@shared-molecules/button-link-downloader';
import { SocialNetworks } from '@shared-molecules/social-networks';
import { CopyEmailClipboard } from '@shared-molecules/copy-email-clipboard';

import cvFile from '@assets-documents/cv-oscar-gonzalez.pdf';

import './style.css';


function PersonalInformation() {
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
        <section className="personal-information">
            <Title {...titleH1} />
            <Title {...titleH2} />
            <ButtonLinkDownloader {...buttonLinkDownloader} />
            <div>
                <SocialNetworks />
                <CopyEmailClipboard />
            </div>
        </section>
    );
}

export { PersonalInformation };
