import './style.css';


function RadioButtonGroup({
    labelData = [],
    groupName,
    selectDefaultHtmlFor,
    LabelComponent = <label></label>
}) {
    const radioButtons = labelData.map((value, index) => {
        const { htmlFor, customProperties } = value;
        const isDefaultChecked = selectDefaultHtmlFor === htmlFor;


        return (
            <li
                key={`${htmlFor}-${groupName}-${index}`}
                className='radio-button__li'
            >
                <LabelComponent
                    htmlFor={htmlFor}
                    groupName={groupName}
                    defaultChecked={isDefaultChecked}
                    {...customProperties}
                />
            </li>
        );
    });


    return radioButtons;
}

export { RadioButtonGroup };
