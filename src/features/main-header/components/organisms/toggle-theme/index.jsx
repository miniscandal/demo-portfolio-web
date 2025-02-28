import { ButtonToggleTheme } from '@feat-main-header-molecules/button-toggle-theme';

import { PIXEL_ART_ITEM_ANIME_DANGO_BLUE } from '@shared-atoms/pixel-art/variants';
import { PIXEL_ART_ITEM_ANIME_DANGO_YELLOW } from '@shared-atoms/pixel-art/variants';

import './style.css';


function ToggleTheme() {
    const prefersColorScheme = window.matchMedia('(prefers-color-scheme: dark)').matches;


    return (
        <div className='toggle-theme'>
            <ButtonToggleTheme
                text='Dark'
                htmlFor='dark-theme'
                groupName='scheme-theme'
                defaultChecked={prefersColorScheme}
                character={PIXEL_ART_ITEM_ANIME_DANGO_YELLOW}
                type='dark'
            />
            <ButtonToggleTheme
                text='Light'
                htmlFor='light-theme'
                groupName='scheme-theme'
                defaultChecked={!prefersColorScheme}
                character={PIXEL_ART_ITEM_ANIME_DANGO_BLUE}
                type='light'
            />
        </div>
    );
}

export { ToggleTheme };
