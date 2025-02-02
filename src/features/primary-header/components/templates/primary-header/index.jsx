import { HeaderContent } from '@feat-primary-header-organisms/header-content';

import { Picture } from '@shared-atoms/picture';

import backgroundImg from '@assets-images/my-photos/setup/02.jpg';

import './style.css';


function PrimaryHeader() {

    return (
        <header className='primary-header'>
            <div className='primary-header__div'>
                <Picture src={backgroundImg} size='adaptive' objectFit='cover' />
            </div>
            <HeaderContent />
        </header>
    );
}

export { PrimaryHeader };
