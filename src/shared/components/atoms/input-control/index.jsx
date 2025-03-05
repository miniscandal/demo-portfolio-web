import './style.css';


function InputControl({
    htmlFor = 'radio-input',
    groupName = 'group-name',
    defaultChecked = false,
    type = 'radio'
}) {

    return (
        <input
            className='input-control'
            type={type}
            htmlFor={htmlFor}
            name={groupName}
            defaultChecked={defaultChecked}
            hidden
        />
    );
}

export { InputControl };
