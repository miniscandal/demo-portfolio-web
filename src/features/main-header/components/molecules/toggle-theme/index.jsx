import { ButtonDango } from '@feat-main-header-molecules/button-dango';

import './style.css';


function ToggleTheme() {
    const prefersColorScheme = window.matchMedia('(prefers-color-scheme: dark)').matches;


    return (
        <div className='toggle-theme'>
            <ButtonDango
                text='Light'
                htmlFor='light-theme'
                defaultChecked={!prefersColorScheme}
                groupName='scheme-theme'
            />
            <ButtonDango
                text='Dark'
                htmlFor='dark-theme'
                defaultChecked={prefersColorScheme}
                groupName='scheme-theme'
            />
        </div>
    );
}

export { ToggleTheme };
