import { PixelArt } from '@shared-atoms/pixel-art';

import { PIXEL_ART_ITEM_PUMP_GAME } from '@shared-atoms/pixel-art/variants';
import { PIXEL_ART_ITEM_PUMP_GAME_RED_STEP } from '@shared-atoms/pixel-art/variants';
import { PIXEL_ART_ITEM_PUMP_GAME_BLUE_STEP } from '@shared-atoms/pixel-art/variants';
import { PIXEL_ART_ITEM_PUMP_GAME_CENTER_STEP } from '@shared-atoms/pixel-art/variants';

import './style.css';


function PumpItUpGamePoster() {

    return (
        <div className='pump-it-up-game-poster'>
            <div className='pump-it-up-game-poster__div'>
                <PixelArt character={PIXEL_ART_ITEM_PUMP_GAME} />
            </div>
            <div className='pump-it-up-game-poster__div'>
                <PixelArt character={PIXEL_ART_ITEM_PUMP_GAME_BLUE_STEP} />
            </div>
            <div className='pump-it-up-game-poster__div'>
                <PixelArt character={PIXEL_ART_ITEM_PUMP_GAME_BLUE_STEP} />
            </div>
            <div className='pump-it-up-game-poster__div'>
                <PixelArt character={PIXEL_ART_ITEM_PUMP_GAME_RED_STEP} />
            </div>
            <div className='pump-it-up-game-poster__div'>
                <PixelArt character={PIXEL_ART_ITEM_PUMP_GAME_RED_STEP} />
            </div>
            <div className='pump-it-up-game-poster__div'>
                <PixelArt character={PIXEL_ART_ITEM_PUMP_GAME_CENTER_STEP} />
            </div>
            <div className='pump-it-up-game-poster__div'>
                <PixelArt character={PIXEL_ART_ITEM_PUMP_GAME_CENTER_STEP} />
            </div>
        </div>
    )
}

export { PumpItUpGamePoster };
