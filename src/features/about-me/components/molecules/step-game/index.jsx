import { PixelArt } from '@shared-atoms/pixel-art';

import { STEP_GAME_CENTER_STEP } from './variants';

import './style.css';


function StepGame({
    type = STEP_GAME_CENTER_STEP,
    orientationLeft = false,
    isSelected = false
}) {
    const classList = [
        `type-${type}`,
        orientationLeft ? 'orientation-left' : '',
        isSelected ? 'selected' : ''
    ];
    const pixelArt = {
        character: type
    };


    return (
        <div className={`step-game ${classList.join(' ')}`}>
            <PixelArt {...pixelArt} />
        </div>
    );
}

export { StepGame };
