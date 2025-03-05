import { useEffect, useRef } from 'react';

import { ToggleTheme } from '@feat-main-header-molecules/toggle-theme';
import { ButtonDango } from '@feat-main-header-molecules/button-dango';

import './style.css';


function ActionPanel({
    type = '',
    navRef
}) {
    const labelRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (labelRef.current.contains(event.target) || navRef.current.contains(event.target)) {
                return;
            }

            const input = labelRef.current?.querySelector('input');

            input.checked = false;
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [navRef]);


    return (
        <div className={`action-panel ${type}`}>
            <ToggleTheme />
            {
                <ButtonDango
                    ref={labelRef}
                    text='Nav'
                    htmlFor='nav'
                    groupName='nav'
                    color='pink'
                    inputType='checkbox'
                />
            }
        </div>
    );
}

export { ActionPanel };
