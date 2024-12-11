import { SocialNetworks } from '@shared-molecules/social-networks';
import { CopyEmailClipboard } from '@shared-molecules/copy-email-clipboard';
import { HyperlinkIcon } from '@shared-molecules/hyperlink-icon';

import emailIcon from '@assets-images/svg/email.svg';


import './style.css';


function ProfessionalContactMethods({
    urlSocialNetworks = {
        urlGithub: '#',
        urlLinkedin: '#',
    },
    email = 'email@email.com',
    emailFormat = 'email-format',
    reverse = false
}) {
    const socialNetworks = urlSocialNetworks;
    const hyperlinkIcon = {
        href: emailFormat,
        iconSrc: emailIcon
    };
    const copyEmailClipBoard = {
        email
    };


    return (
        <section className={`professional-contact-methods ${reverse ? 'reverse' : ''}`}>
            <SocialNetworks {...socialNetworks} />
            <HyperlinkIcon {...hyperlinkIcon} />
            <CopyEmailClipboard {...copyEmailClipBoard} />
        </section>
    );
}

export { ProfessionalContactMethods };
