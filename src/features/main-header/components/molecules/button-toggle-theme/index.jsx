import { PixelArt } from '@shared-atoms/pixel-art';
import { RadioInput } from '@shared-atoms/radio-input';

import { PIXEL_ART_ITEM_ANIME_DANGO_BLUE } from '@shared-atoms/pixel-art/variants';

import './style.css';


function ButtonToggleTheme({
    text = 'button-toggle-theme',
    htmlFor = 'dark-theme',
    groupName = 'button-toggle-theme',
    defaultChecked = false,
    character = PIXEL_ART_ITEM_ANIME_DANGO_BLUE,
    type = 'light'
}) {
    const classList = [
        type
    ];


    return (
        <label className={`button-toggle-theme ${classList.join(' ')}`}>
            <PixelArt character={character} />
            <span>
                {text}
            </span>
            <RadioInput htmlFor={htmlFor} defaultChecked={defaultChecked} groupName={groupName} />
        </label>
    );
}

export { ButtonToggleTheme };
