import { AboutMe } from '@feat-home-molecules/about-me';
import { Paragraph } from '@shared-atoms/paragraph';
import { CopyEmailClipboard } from '@shared-molecules/copy-email-clipboard';
import { SocialNetworks } from '@shared-molecules/social-networks';
import { SpecializationTechnologicalSkills } from '@feat-home-molecules/specialization-technological-skills';

import './style.css';


function PrimaryFooter() {
    const paragraphInspiredQuote = {
        text: '“No one knows what the future holds, so its potential is endless”',
        color: 'light'
    };
    const paragraphAuthor = {
        text: 'Rintaro Okabe - Steins;Gate (anime series)',
        color: 'light'
    };

    return (
        <footer className='primary-footer'>
            <section>
                <AboutMe />
                <SpecializationTechnologicalSkills />
            </section>
            <section>
                <div className='about-me__div--inspired'>
                    <Paragraph {...paragraphInspiredQuote} />
                    <Paragraph {...paragraphAuthor} />
                </div>
                <div className='about-me__div--professional-contact'>
                    <SocialNetworks />
                    <CopyEmailClipboard />
                </div>
            </section>
        </footer>
    );
}

export { PrimaryFooter }
