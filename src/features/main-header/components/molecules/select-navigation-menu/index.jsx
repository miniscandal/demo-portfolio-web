import { PixelArt } from '@shared-atoms/pixel-art';

import { PIXEL_ART_ITEM_ANIME_DANGO_PINK } from '@shared-atoms/pixel-art/variants';

import './style.css';


function SelectNavigationMenu({
    isChecked,
    ref,
    handleChange = () => { }
}) {


    return (
        <label ref={ref} className='select-navigation-menu'>
            <PixelArt character={PIXEL_ART_ITEM_ANIME_DANGO_PINK} />
            <span>Nav</span>
            <input type='checkbox' hidden checked={isChecked} onChange={handleChange} />
        </label>
    );
}

export { SelectNavigationMenu };
