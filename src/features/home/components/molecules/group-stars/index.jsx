import { LittleStar } from '@shared-molecules/little-star';

import './style.css';

function GroupStars() {

    return (
        <div className='group-stars'>
            <LittleStar />
            <LittleStar />
            <LittleStar />
        </div>
    );
}

export { GroupStars };
