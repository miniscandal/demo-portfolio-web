import { useContext, useRef } from 'react';

import { MiniGameContext } from '@feat-about-me-contexts/mini-game';

import { StepPlatform } from '@feat-about-me-molecules/step-platform';

import { NextStepIndicator } from '@shared-molecules/next-step-indicator';
import { Title } from '@shared-atoms/title';

import { playBitSoundMiss } from '@feat-about-me-helpers/play-bit-sound/variants';
import { playBitSoundPerfect } from '@feat-about-me-helpers/play-bit-sound/variants';
import { playBitSound } from '@feat-about-me-helpers/play-bit-sound';

import { STEP_GAME_PRESSED_CSS_CLASS } from '@feat-about-me-atoms/step-game/variants';

import './style.css';


function MiniGame() {
    const { gameState, setGameState } = useContext(MiniGameContext);
    const { sequenceGame, endGame } = gameState;
    const pausedGame = useRef(false);

    const updateGameState = () => {
        setGameState(prevState => {
            const { sequenceGame } = prevState;
            const newSequenceGame = sequenceGame.slice(1);

            return {
                sequenceGame: newSequenceGame,
                endGame: newSequenceGame.length === 0
            };
        });
    };

    const stepPlatform = {
        sequenceGame,
        handleClick: (listItem) => {
            if (pausedGame.current) {

                return;
            }

            const stepGame = listItem.firstElementChild;
            const selectedListItemId = listItem.dataset.id;
            const { sequenceGame } = gameState;

            if (sequenceGame[0].id !== selectedListItemId) {
                playBitSound(playBitSoundMiss);

                return;
            }

            pausedGame.current = true;
            stepGame.classList.add(STEP_GAME_PRESSED_CSS_CLASS);
            playBitSound(playBitSoundPerfect);

            setTimeout(() => {
                updateGameState(selectedListItemId);
                pausedGame.current = false;
            }, 500);
        }
    };


    return (
        <div className='mini-game'>
            {
                endGame
                    ?
                    <Title text='Oscar González' type='h3' />
                    :
                    <NextStepIndicator />
            }
            <StepPlatform {...stepPlatform} />
        </div>
    );
}

export { MiniGame };
