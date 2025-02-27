import { IconButton } from '@shared-molecules/icon-button';

import { ArrowBack } from '@shared-atoms/icon-font-svg/variants';

import './style.css';


function MangaPrimarySideBar({ setReadMangaPageId }) {

    const iconButton = {
        svg: ArrowBack,
        handleClick: () => { setReadMangaPageId(undefined); }
    };

    return (

        <nav className='manga-primary-side-bar'>
            <ul>
                <li>
                    <IconButton {...iconButton} />
                </li>
            </ul>
        </nav>
    );
}

export { MangaPrimarySideBar };
