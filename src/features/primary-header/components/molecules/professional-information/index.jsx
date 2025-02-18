import { useContext } from 'react';

import { ProfessionalInformationContext } from '@feat-primary-header-contexts/professional-information';

import { Title } from '@shared-atoms/title';
import { ButtonLinkDownloader } from '@shared-molecules/button-link-downloader';

import './style.css';


function ProfessionalInformation() {
    const { name, discipline, fileName, fileHref } = useContext(ProfessionalInformationContext);


    return (
        <section className='professional-information'>
            <Title text={name} type='h1' />
            <div className='professional-information__div--subtitle'>
                <Title text={discipline} type='h2' />
            </div>
            <div className='professional-information__div'>
                <ButtonLinkDownloader
                    name={`${fileName}.pdf`}
                    description='Resume'
                    href={fileHref}
                />
            </div>
        </section>
    );
}

export { ProfessionalInformation };
