import { Paragraph } from '@shared-atoms/paragraph';

import './style.css';


function PersonalAttitude({ name }) {
    const paragraph = {
        text: name
    };

    return (
        <div className='personal-attitude'>
            <Paragraph {...paragraph} />
        </div>
    );
}

export { PersonalAttitude };
