import { ProfessionalContactProvider } from '@shared-contexts/professional-contact';

import { Paragraph } from '@shared-atoms/paragraph';
import { ProfessionalContact } from '@shared-organisms/professional-contact';

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
        <footer className='primary-footer'>
            <div>
                <Paragraph {...paragraphInspiredQuote} />
                <Paragraph {...paragraphAuthor} />
            </div>
            <div>
                <ProfessionalContactProvider>
                    <ProfessionalContact {...professionalContactMethods} />
                </ProfessionalContactProvider>
            </div>
        </footer>
    );
}

export { PrimaryFooter };
