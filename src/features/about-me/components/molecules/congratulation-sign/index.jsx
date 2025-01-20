import { Paragraph } from '@shared-atoms/paragraph';

import './style.css';


function CongratulationSignMiniGame() {
    const paragraph = {
        text: 'PERFECT',
        color: 'pink-pastel'
    };


    return (
        <div className='congratulation-sign-mini-game'>
            <Paragraph {...paragraph} />
        </div>
    );
}

export { CongratulationSignMiniGame };
