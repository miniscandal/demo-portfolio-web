import { createContext } from 'react';
import { useState } from 'react';

import { STEP_GAME_CENTER_STEP } from '@feat-about-me-molecules/step-game/variants';
import { STEP_GAME_RED_STEP } from '@feat-about-me-molecules/step-game/variants';
import { STEP_GAME_BLUE_STEP } from '@feat-about-me-molecules/step-game/variants';


const MiniGameContext = createContext({
    gameState: {
        sequenceGame: [{}],
        endGame: undefined
    },
    setGameState: undefined
});


function MiniGameProvider({ children }) {
    const [gameState, setGameState] = useState({
        sequenceGame: [
            {
                id: '0',
                type: STEP_GAME_RED_STEP, orientationLeft: true
            },
            {
                id: '1',
                type: STEP_GAME_CENTER_STEP
            },
            {
                id: '2',
                type: STEP_GAME_BLUE_STEP, orientationLeft: true
            },
            {
                id: '3',
                type: STEP_GAME_RED_STEP
            },
            {
                id: '4',
                type: STEP_GAME_CENTER_STEP
            },
            {
                id: '5',
                type: STEP_GAME_BLUE_STEP
            }
        ],
        endGame: false
    });

    const provider = {
        gameState,
        setGameState
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
