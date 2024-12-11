import { PrimaryHeader } from '@feat-primary-header-templates/primary-header';

import { ProfessionalContactProvider } from '@shared-contexts/professional-contact';

import { message } from '@shared-resources-contact/mailto-template.json';
import { socialNetworks } from '@shared-resources-contact/social-networks.json';

import './App.css';


function App() {
    // const { linkedin, github } = socialNetworks;
    // const hyperlinkIconLinkedin = {
    //     href: linkedin.url,
    //     iconSrc: linkedinIcon
    // };
    // const hyperlinkIconGithub = {
    //     href: github.url,
    //     iconSrc: githubIcon
    // };
    // const hyperlinkIconEmail = {
    //     href: message.url,
    //     iconSrc: emailIcon
    // };

    // 'oscar01dev@gmail.com'



    return (
        <>
            <scroll-container>
                <ProfessionalContactProvider>
                    <PrimaryHeader />
                </ProfessionalContactProvider>
                <main>
                </main>
            </scroll-container>
            {/* <RootHome /> */}
        </>
    );
}

export default App;
