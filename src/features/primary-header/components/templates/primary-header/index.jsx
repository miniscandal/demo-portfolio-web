import { Image } from '@shared-atoms/image';

import { HeaderContent } from '@feat-primary-header-organisms/header-content';

import srcPhoto from '@assets-images/photo-me/main-3.jpg';

import './style.css';


function PrimaryHeader() {
    const image = {
        src: srcPhoto,
        size: 'adaptive',
        objectFit: 'cover'
    };


    return (
        <header className='primary-header'>
            <div className='primary-header__div--background'>
                <Image {...image} />
            </div>
            <HeaderContent />
        </header>
    );
}

export { PrimaryHeader };
