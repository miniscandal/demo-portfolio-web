import './style.css';


function RadioInput({
    htmlFor = 'radio-input',
    checked = false,
    groupName = 'group-name',
    onChange = () => { }
}) {

    return (
        <input
            className='radio-input'
            type='radio'
            htmlFor={htmlFor}
            onChange={() => onChange(htmlFor)}
            name={groupName}
            checked={checked}
        />
    );
}

export { RadioInput };
