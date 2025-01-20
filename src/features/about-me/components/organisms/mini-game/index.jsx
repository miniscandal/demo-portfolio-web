import { useContext } from 'react';

import { MiniGameContext } from '@feat-about-me-contexts/mini-game';

import { StepPlatform } from '@feat-about-me-molecules/step-platform';
import { CongratulationSignMiniGame } from '@feat-about-me-molecules/congratulation-sign';

import { NextStepButton } from '@shared-molecules/next-step-button';
import { Paragraph } from '@shared-atoms/paragraph';

import { playBitSoundMiss } from '@feat-about-me-helpers/play-bit-sound/variants';
import { playBitSoundPerfect } from '@feat-about-me-helpers/play-bit-sound/variants';
import { playBitSound } from '@feat-about-me-helpers/play-bit-sound';

import { STEP_GAME_PRESSED_CSS_CLASS } from '@feat-about-me-molecules/step-game/variants';

import './style.css';


function MiniGame() {
    const { gameState, setGameState } = useContext(MiniGameContext);
    const { sequenceGame, endGame } = gameState;

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
            const stepGame = listItem.firstElementChild;
            const selectedListItemId = listItem.dataset.id;
            const { sequenceGame } = gameState;

            if (sequenceGame[0].id !== selectedListItemId) {
                playBitSound(playBitSoundMiss);
                return;
            }

            stepGame.classList.add(STEP_GAME_PRESSED_CSS_CLASS);
            playBitSound(playBitSoundPerfect);
            setTimeout(() => {
                updateGameState(selectedListItemId);
            }, 500);
        }
    };
    const paragraph = {
        text: 'Oscar González',
        size: 'medium',
        color: 'light'
    };


    return (
        <div className='mini-game'>

            {
                endGame ?
                    <div className='mini-game__div--end-game'>
                        <div className='mini-game__div--indicator'>
                            <CongratulationSignMiniGame />
                        </div>
                        <Paragraph {...paragraph} />
                    </div>
                    :
                    <div className='mini-game__div--start-game'>
                        <NextStepButton />
                    </div>
            }
            <StepPlatform {...stepPlatform} />
        </div>
    );
}

export { MiniGame };
