import { SocialNetworks } from '@shared-molecules/social-networks';
import { CopyEmailClipboard } from '@shared-molecules/copy-email-clipboard';

import './style.css';


function ProfessionalContactMethods({ reverse = false }) {

    return (
        <section className={`professional-contact-methods ${reverse ? 'reverse' : ''}`}>
            <SocialNetworks />
            <CopyEmailClipboard />
        </section>
    );
}

export { ProfessionalContactMethods };
