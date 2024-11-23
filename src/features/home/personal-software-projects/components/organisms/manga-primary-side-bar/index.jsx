import { IconButton } from '@shared-molecules/icon-button';

import { ArrowBack } from '@shared-atoms/icon-font-svg/variants';

import './style.css';


function MangaPrimarySideBar({ state }) {
    const { setReadMangaPanelId } = state;

    const iconButton = {
        svg: ArrowBack,
        handleClick: () => { setReadMangaPanelId(undefined); }
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
