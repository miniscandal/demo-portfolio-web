import { RadioInput } from '@shared-atoms/radio-input';

import './style.css';


function SelectGoalDescription({
    htmlFor,
    groupName,
    defaultChecked
}) {


    return (
        <label className='select-goal-description'>
            <RadioInput
                htmlFor={htmlFor}
                groupName={groupName}
                defaultChecked={defaultChecked}
            />
        </label>
    );
}

export { SelectGoalDescription };
