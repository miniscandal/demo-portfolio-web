import { PixelArt } from '@shared-atoms/pixel-art';
import { InputControl } from '@shared-atoms/input-control';

import {
    PIXEL_ART_ITEM_ANIME_DANGO_BLUE,
    PIXEL_ART_ITEM_ANIME_DANGO_PINK,
    PIXEL_ART_ITEM_ANIME_DANGO_YELLOW
} from '@shared-atoms/pixel-art/variants';

import './style.css';


const COLOR_DANGO = {
    blue: PIXEL_ART_ITEM_ANIME_DANGO_BLUE,
    pink: PIXEL_ART_ITEM_ANIME_DANGO_PINK,
    yellow: PIXEL_ART_ITEM_ANIME_DANGO_YELLOW
};

function ButtonDango({
    text = 'Dango',
    htmlFor = 'dark-theme',
    groupName = 'button-toggle-theme',
    defaultChecked = false,
    color = 'blue',
    inputType = 'radio',
    ref
}) {


    return (
        <label ref={ref} className='button-dango'>
            <PixelArt character={COLOR_DANGO[color]} />
            <InputControl type={inputType} htmlFor={htmlFor} defaultChecked={defaultChecked} groupName={groupName} />
            <span>{text}</span>
        </label>
    );
}

export { ButtonDango };
