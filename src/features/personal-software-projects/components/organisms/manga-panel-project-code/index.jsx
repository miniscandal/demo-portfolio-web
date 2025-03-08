import { Title } from '@shared-atoms/title';

import './style.css';


function MangaPanelProjectCode({
    isMiniatureMode = false
}) {

    return (
        <div className='manga-panel-project-code'>
            <Title text='Code Demo' type='h4' />
            {
                !isMiniatureMode
                &&
                <>
                    code demo
                </>
            }
        </div>
    );
};

export { MangaPanelProjectCode };
