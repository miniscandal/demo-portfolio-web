import { HyperlinkIcon } from '@shared-molecules/hyperlink-icon';

import linkedinIcon from '@assets-images/svg/linkedin.svg';
import githubIcon from '@assets-images/svg/github.svg';

import './style.css';


function SocialNetworks({
    githubUrl = '#',
    linkedinUrl = '#'
}) {

    return (
        <section className='social-networks'>
            <HyperlinkIcon href={linkedinUrl} iconSrc={linkedinIcon} />
            <HyperlinkIcon href={githubUrl} iconSrc={githubIcon} />
        </section>
    );
}

export { SocialNetworks };
