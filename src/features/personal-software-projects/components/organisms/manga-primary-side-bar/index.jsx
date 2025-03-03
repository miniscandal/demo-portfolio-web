import { IconButton } from '@shared-molecules/icon-button';

import { ArrowBack } from '@shared-atoms/icon-font-svg/variants';

import './style.css';


function MangaPrimarySideBar({ setSelectedMangaPanelId }) {

    return (

        <nav className='manga-primary-side-bar'>
            <ul>
                <li>
                    <IconButton svg={ArrowBack} handleClick={() => setSelectedMangaPanelId(null)} />
                </li>
            </ul>
        </nav>
    );
}

export { MangaPrimarySideBar };
