import { AboutMe } from '@feat-home-primary-footer-molecules/about-me';
import { SpecializationTechnologicalSkills } from '@feat-home-primary-footer-organisms/specialization-technological-skills';

import { Paragraph } from '@shared-atoms/paragraph';
import { CopyEmailClipboard } from '@shared-molecules/copy-email-clipboard';
import { SocialNetworks } from '@shared-molecules/social-networks';

import './style.css';


function PrimaryFooter() {
    const paragraphInspiredQuote = {
        text: '«No one knows what the future holds, so its potential is endless»',
        color: 'light'
    };
    const paragraphAuthor = {
        text: '-Rintaro Okabe - Steins;Gate (anime series)',
        color: 'light'
    };

    return (
        <footer className='primary-footer'>
            <div>
                <section>
                    <SpecializationTechnologicalSkills />
                    <AboutMe />
                </section>
                <section>
                    <div>
                        <Paragraph {...paragraphInspiredQuote} />
                        <Paragraph {...paragraphAuthor} />
                    </div>
                    <div>
                        <SocialNetworks />
                        <CopyEmailClipboard />
                    </div>
                </section>
            </div>
        </footer>
    );
}

export { PrimaryFooter };
