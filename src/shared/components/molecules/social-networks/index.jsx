import { HyperlinkIcon } from '@shared-molecules/hyperlink-icon';

import linkedinIcon from '@assets-images/svg/linkedin.svg';
import githubIcon from '@assets-images/svg/github.svg';
import emailIcon from '@assets-images/svg/email.svg';

import './style.css';


function SocialNetworks() {
    const hyperlinkIconLinkedin = {
        href: 'https://mx.linkedin.com/',
        iconSrc: linkedinIcon
    };
    const hyperlinkIconGithub = {
        href: 'https://github.com/',
        iconSrc: githubIcon
    };
    const hyperlinkIconEmail = {
        href: 'mailto:oscar01dev@gmail.com?',
        iconSrc: emailIcon
    };

    return (
        <section className="social_networks">
            <HyperlinkIcon {...hyperlinkIconLinkedin} />
            <HyperlinkIcon {...hyperlinkIconGithub} />
            <HyperlinkIcon {...hyperlinkIconEmail} />
        </section>
    );
}

export { SocialNetworks };
