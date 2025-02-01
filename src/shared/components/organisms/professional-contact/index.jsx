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

    return (
        <aside className={`professional-contact ${classList.join(' ')}`}>
            <div className='professional-contact__div'>
                <SocialNetworks githubUrl={github.url} linkedinUrl={linkedin.url} />
                <HyperlinkIcon href={emailFormat} iconSrc={emailIcon} />
            </div>
            <div className='professional-contact__div'>
                <CopyEmailClipboard email={email} />
            </div>
        </aside>
    );
}

export { ProfessionalContact };
