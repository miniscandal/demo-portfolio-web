import { createContext } from 'react';
import { useState } from 'react';

import { STEP_PLAYER_CENTER_STEP } from '@feat-about-me-molecules/step-game/variants';
import { STEP_PLAYER_RED_STEP } from '@feat-about-me-molecules/step-game/variants';
import { STEP_PLAYER_BLUE_STEP } from '@feat-about-me-molecules/step-game/variants';


const MiniGameContext = createContext({
    stateEndGame: {},
    stateSequenceGame: {}
});


function MiniGameProvider({ children }) {
    const [endGame, setEndGame] = useState(false);
    const [sequenceGame, setSequenceGame] = useState([
        {
            type: STEP_PLAYER_RED_STEP, orientationLeft: true
        },
        {
            type: STEP_PLAYER_CENTER_STEP
        },
        {
            type: STEP_PLAYER_BLUE_STEP, orientationLeft: true
        },
        {
            type: STEP_PLAYER_RED_STEP
        },
        {
            type: STEP_PLAYER_CENTER_STEP
        },
        {
            type: STEP_PLAYER_BLUE_STEP
        }
    ]);
    const provider = {
        stateEndGame: {
            endGame,
            setEndGame
        },
        stateSequenceGame: {
            sequenceGame,
            setSequenceGame
        }
    };


    return (
        <MiniGameContext.Provider value={provider}>
            {children}
        </MiniGameContext.Provider>
    );
}

export {
    MiniGameContext,
    MiniGameProvider
};
