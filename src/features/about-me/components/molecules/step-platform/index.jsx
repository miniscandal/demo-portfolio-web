import { StepGame } from '@feat-about-me-molecules/step-game';
import { UnorderedList } from '@shared-molecules/unordered-list';

import './style.css';


function StepPlatform({
    sequenceGame = [
        { id: '0' },
        { id: '1' },
        { id: '2' }
    ],
    handleClick = () => { }
}) {
    const unorderedList = {
        id: 'step-platform',
        selectListItemId: sequenceGame[0]?.id,
        Component: StepGame,
        items: sequenceGame,
        handleClick
    };

    return (
        <div className='step-platform'>
            <UnorderedList {...unorderedList} />
        </div>
    );
}

export { StepPlatform };
