import { createContext } from 'react';
import { useState } from 'react';


const MiniGameContext = createContext(null);


function MiniGameProvider({ children }) {
    const [endGame, setEndGame] = useState(false);
    const centralStep = 0;
    const blueStepA = 1;
    const blueStepB = 2;
    const redStepA = 3;
    const redStepB = 4;
    const sequence = [blueStepA, centralStep, redStepB, redStepA, blueStepB];
    const playerSteps = [];

    const provider = {
        stateGame: {
            endGame,
            setEndGame
        },
        sequenceGame: sequence,
        playerSteps
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
