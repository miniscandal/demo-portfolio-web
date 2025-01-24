import { HeaderContent } from '@feat-primary-header-organisms/header-content';

import { Picture } from '@shared-atoms/picture';

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
            <div className='primary-header__div'>
                <Picture {...image} />
            </div>
            <HeaderContent />
        </header>
    );
}

export { PrimaryHeader };
