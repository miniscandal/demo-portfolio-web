import { Title } from '@shared-atoms/title';
import { ButtonLinkDownloader } from '@shared-molecules/button-link-downloader';
import { SocialNetworks } from '@shared-molecules/social-networks';
import { CopyEmailClipboard } from '@shared-atoms/copy-email-clipboard';

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
        href: cvFile,
        size: 'fit'
    };

    return (
        <section className="personal-information">
            <div className="personal-information__div">
                <div className='personal-information__div--titles'>
                    <Title {...titleH1} />
                    <Title {...titleH2} />
                </div>
                <ButtonLinkDownloader {...buttonLinkDownloader} />
                <div className='personal-information__div--social'>
                    <SocialNetworks />
                    <CopyEmailClipboard />
                </div>
            </div>
        </section>
    );
}

export { PersonalInformation };
