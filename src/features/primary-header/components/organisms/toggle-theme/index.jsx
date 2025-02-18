import './style.css';


function ToggleTheme() {
    const prefersColorScheme = window.matchMedia('(prefers-color-scheme: dark)').matches;


    return (
        <div className='toggle-theme'>
            <label htmlFor='dark-theme'>
                dark
                <input id='dark-theme' type="radio" defaultChecked={prefersColorScheme} name='theme' />
            </label>
            <label htmlFor='light-theme'>
                light
                <input id='light-theme' type="radio" defaultChecked={!prefersColorScheme} name='theme' />
            </label>
        </div>
    );
}

export { ToggleTheme };
