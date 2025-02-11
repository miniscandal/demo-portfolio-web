import './style.css';


function SelectEmploymentSummary({
    text = 'Select Employment Summary',
    checked = false,
    children
}) {
    const classList = [
        checked ? 'checked' : ''
    ];

    return (
        <label className={`select-employment-summary ${classList.join(' ')}`}>
            {text}
            {children}
        </label>
    );
}

export { SelectEmploymentSummary };
