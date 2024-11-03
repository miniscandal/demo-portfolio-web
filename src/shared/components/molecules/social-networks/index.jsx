import { HyperlinkIcon } from '@shared-molecules/hyperlink-icon';

import linkedinIcon from '@assets-images/svg/linkedin.svg';
import githubIcon from '@assets-images/svg/github.svg';
import emailIcon from '@assets-images/svg/email.svg';

import { message } from '@shared-resources-contact/mailto-template.json';
import { socialNetworks } from '@shared-resources-contact/social-networks.json';

import './style.css';


function SocialNetworks() {
    const { linkedin, github } = socialNetworks;
    const hyperlinkIconLinkedin = {
        href: linkedin.url,
        iconSrc: linkedinIcon
    };
    const hyperlinkIconGithub = {
        href: github.url,
        iconSrc: githubIcon
    };
    const hyperlinkIconEmail = {
        href: message.url,
        iconSrc: emailIcon
    };

    return (
        <section className='social-networks'>
            <HyperlinkIcon {...hyperlinkIconLinkedin} />
            <HyperlinkIcon {...hyperlinkIconGithub} />
            <HyperlinkIcon {...hyperlinkIconEmail} />
        </section>
    );
}

export { SocialNetworks };
