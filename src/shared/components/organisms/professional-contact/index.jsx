import { useContext } from 'react';

import { ProfessionalContactContext } from '@shared-contexts/professional-contact';

import { SocialNetworks } from '@shared-molecules/social-networks';
import { CopyEmailClipboard } from '@shared-molecules/copy-email-clipboard';
import { HyperlinkIcon } from '@shared-molecules/hyperlink-icon';

import emailIcon from '@assets-images/svg/email.svg';

import './style.css';


function ProfessionalContact({
    reverse = false
}) {
    const classList = [
        reverse ? 'reverse' : ''
    ];
    const { email, emailFormat, github, linkedin } = useContext(ProfessionalContactContext);

    const socialNetworks = {
        githubUrl: github.url,
        linkedinUrl: linkedin.url
    };
    const hyperlinkIcon = {
        href: emailFormat,
        iconSrc: emailIcon
    };
    const copyEmailClipBoard = {
        email
    };


    return (
        <aside className={`professional-contact ${classList.join(' ')}`}>
            <div className='professional-contact__div'>
                <SocialNetworks {...socialNetworks} />
                <HyperlinkIcon {...hyperlinkIcon} />
            </div>
            <div className='professional-contact__div'>
                <CopyEmailClipboard {...copyEmailClipBoard} />
            </div>
        </aside>
    );
}

export { ProfessionalContact };
