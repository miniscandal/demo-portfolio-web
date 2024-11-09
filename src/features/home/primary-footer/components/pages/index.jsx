import { AboutMe } from '@feat-home-primary-footer-molecules/about-me';
import { SpecializationTechnologicalSkills } from '@feat-home-primary-footer-organisms/specialization-technological-skills';

import { Paragraph } from '@shared-atoms/paragraph';
import { ProfessionalContactMethods } from '@shared-organisms/professional-contact-methods';

import { ABOUT_ME } from '@shared-constants/anchor-id';

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
    const professionalContactMethods = {
        reverse: true
    };

    return (
        <footer id={ABOUT_ME} className='primary-footer'>
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
                    <ProfessionalContactMethods {...professionalContactMethods} />
                </section>
            </div>
        </footer>
    );
}

export { PrimaryFooter };
