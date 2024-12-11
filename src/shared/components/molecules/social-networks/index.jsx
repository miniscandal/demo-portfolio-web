import { HyperlinkIcon } from '@shared-molecules/hyperlink-icon';

import linkedinIcon from '@assets-images/svg/linkedin.svg';
import githubIcon from '@assets-images/svg/github.svg';

import './style.css';


function SocialNetworks({
    linkedinUrl = '#',
    githubUrl = '#'
}) {
    const hyperlinkIconLinkedin = {
        href: linkedinUrl,
        iconSrc: linkedinIcon
    };
    const hyperlinkIconGithub = {
        href: githubUrl,
        iconSrc: githubIcon
    };

    return (
        <section className='social-networks'>
            <HyperlinkIcon {...hyperlinkIconLinkedin} />
            <HyperlinkIcon {...hyperlinkIconGithub} />
        </section>
    );
}

export { SocialNetworks };
