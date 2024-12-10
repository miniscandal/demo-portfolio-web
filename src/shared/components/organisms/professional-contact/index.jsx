import { Title } from '@shared-atoms/title';
import { ButtonLinkDownloader } from '@shared-molecules/button-link-downloader';
import { ProfessionalContactMethods } from '@shared-organisms/professional-contact-methods';

import './style.css';


function ProfessionalContact({
    name = 'Name',
    discipline = 'Discipline - Job Title',
    fileHref = '',
    fileName = 'file',
}) {
    const titleH1 = {
        text: name,
        color: 'light-silver',
        type: 'h1'
    };
    const titleH2 = {
        text: discipline,
        color: 'light-silver',
        type: 'h2'
    };
    const buttonLinkDownloader = {
        name: `${fileName}.pdf`,
        description: 'Resume',
        href: fileHref,
    };

    return (
        <section className="professional-contact">
            <Title {...titleH1} />
            <Title {...titleH2} />
            <ButtonLinkDownloader {...buttonLinkDownloader} />
            <ProfessionalContactMethods />
        </section>
    );
}

export { ProfessionalContact };
