import { Paragraph } from '@shared-atoms/paragraph';
import { ProfessionalContact } from '@shared-organisms/professional-contact';

import './style.css';


function MainFooter() {

    return (
        <footer className='main-footer'>
            <div>
                <Paragraph
                    text='«No one knows what the future holds, so its potential is endless»'
                />
                <Paragraph
                    text='-Rintaro Okabe - Steins;Gate (anime series)'
                />
            </div>
            <div>
                <ProfessionalContact reverse={true} />
            </div>
        </footer>
    );
}

export { MainFooter };
