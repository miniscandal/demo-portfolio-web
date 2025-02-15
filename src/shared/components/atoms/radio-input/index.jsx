import './style.css';


function RadioInput({
    htmlFor = 'radio-input',
    groupName = 'group-name',
    defaultChecked = false
}) {

    return (
        <input
            className='radio-input'
            type='radio'
            htmlFor={htmlFor}
            name={groupName}
            defaultChecked={defaultChecked}
        />
    );
}

export { RadioInput };
