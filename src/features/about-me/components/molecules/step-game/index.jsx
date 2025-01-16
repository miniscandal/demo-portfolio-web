import { PixelArt } from '@shared-atoms/pixel-art';

import { STEP_PLAYER_CENTER_STEP } from './variants';

import './style.css';


function StepPlayer({
    type = STEP_PLAYER_CENTER_STEP,
    orientationLeft = false
}) {
    const classList = [
        `type-${type}`,
        orientationLeft ? 'orientation-left' : ''
    ];

    const pixelArt = {
        character: type
    };


    return (
        <div className={`step-player ${classList.join(' ')}`}>
            <PixelArt {...pixelArt} />
        </div>
    );
}

export { StepPlayer };
