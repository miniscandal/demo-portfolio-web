import { AboutMe } from '@feat-primary-footer-molecules/about-me';
import { SpecializationTechnologicalSkills } from '@feat-primary-footer-organisms/specialization-technological-skills';

import { ProfessionalContactProvider } from '@shared-contexts/professional-contact';

import { Paragraph } from '@shared-atoms/paragraph';
import { ProfessionalContact } from '@shared-organisms/professional-contact';

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
                    <ProfessionalContactProvider>
                        <ProfessionalContact {...professionalContactMethods} />
                    </ProfessionalContactProvider>
                </section>
            </div>
        </footer>
    );
}

export { PrimaryFooter };
