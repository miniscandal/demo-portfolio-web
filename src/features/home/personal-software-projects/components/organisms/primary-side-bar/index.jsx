import { IconButton } from '@shared-molecules/icon-button';

import { ArrowBack } from '@shared-atoms/icon-font-svg/variants';

import './style.css';


function PrimarySideBar() {
    const iconButton = {
        svg: ArrowBack,
        handleClick: () => { setIdSelected(''); }
    };

    return (

        <nav className='primary-side-bar'>
            <ul>
                <li>
                    <IconButton {...iconButton} />
                </li>
            </ul>
        </nav>
    )
}

export { PrimarySideBar };
