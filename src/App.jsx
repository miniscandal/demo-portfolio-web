import { RootHome } from '@feat-home-root/index';

import { PrimaryHeader } from '@feat-home-primary-header-templates/primary-header';


import srcPhoto from '@assets-images/photo-me/main-3.jpg';

import { PIXEL_ART_ANIME_UMI } from '@shared-molecules/pixel-art/variants';
import cvFile from '@assets-documents/cv-oscar-gonzalez.pdf';


import './App.css';


function App() {
    // const image = {
    //     src: srcPhoto,
    //     size: 'default',
    //     objectFit: 'cover'
    // };
    // const characterSpeech = {
    //     text: 'Hello World!',
    //     character: PIXEL_ART_ANIME_UMI
    // };


    // const titleH1 = {
    //     text: 'Oscar González',
    //     color: 'light-silver',
    //     type: 'h1'
    // };
    // const titleH2 = {
    //     text: 'Computer Systems Engineer',
    //     color: 'light-silver',
    //     type: 'h2'
    // };
    // const buttonLinkDownloader = {
    //     description: 'Resume',
    //     href: cvFile
    // };


    return (
        <>
            <PrimaryHeader />
            {/* <RootHome /> */}
        </>
    );
}

export default App;
