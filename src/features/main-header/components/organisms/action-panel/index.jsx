import { useEffect, useRef, useState } from 'react';

import { ToggleTheme } from '@feat-main-header-organisms/toggle-theme';
import { ChessboardNav } from '@feat-main-header-organisms/chessboard-nav';
import { SelectNavigationMenu } from '@feat-main-header-molecules/select-navigation-menu';

import { VARIANT_ACTIVITY_BAR_CHESSBOARD_NAV } from '@feat-main-header-organisms/chessboard-nav/types';

import './style.css';


function ActionPanel({
    type = ''
}) {
    const [isChecked, setIsChecked] = useState(false);
    const panelRef = useRef(null);
    const labelRef = useRef(null);

    const handleChange = () => setIsChecked(prev => !prev);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (!panelRef.current || !labelRef.current) {
                return;
            }

            if (labelRef.current.contains(event.target) || panelRef.current.contains(event.target)) {
                return;
            }

            setIsChecked(false);
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);


    return (
        <div className={`action-panel ${type}`}>
            <div className='action-panel__controller'>
                <ToggleTheme />
                {
                    type === VARIANT_ACTIVITY_BAR_CHESSBOARD_NAV
                    &&
                    <SelectNavigationMenu isChecked={isChecked} handleChange={handleChange} ref={labelRef} />
                }
            </div>
            <div ref={panelRef} className='action-panel__nav'>
                <ChessboardNav type={type} />
            </div>
        </div>
    );
}

export { ActionPanel };
