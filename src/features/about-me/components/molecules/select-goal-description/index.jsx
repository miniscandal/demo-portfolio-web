import { InputControl } from '@shared-atoms/input-control';

import './style.css';


function SelectGoalDescription({
    htmlFor,
    groupName,
    defaultChecked
}) {


    return (
        <label className='select-goal-description'>
            <InputControl
                htmlFor={htmlFor}
                groupName={groupName}
                defaultChecked={defaultChecked}
            />
        </label>
    );
}

export { SelectGoalDescription };
