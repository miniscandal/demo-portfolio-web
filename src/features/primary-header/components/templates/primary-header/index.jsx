import { HeaderContent } from '@feat-primary-header-organisms/header-content';

import { Picture } from '@shared-atoms/picture';

import backgroundImg from '@assets-images/my-photos/setup/03.jpg';

import './style.css';


function PrimaryHeader() {
    const image = {
        src: backgroundImg,
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
