import { StepPlayer } from '@feat-about-me-molecules/step-game';

import './style.css';


function StepPlatform({
    sequenceGame = [{}]
}) {
    const steps = sequenceGame.map((step, index) => {
        const { type } = step;


        return (
            <StepPlayer key={`${type}-${index}`} {...step} />
        );
    });

    return (
        <div className='step-platform'>
            {steps}
        </div>
    );
}

export { StepPlatform };
