import './style.css';


function SliderOption({
    id = 'slider-option',
    onChange = () => { },
    checked = false
}) {
    const classList = [
        checked ? 'checked' : ''
    ];


    return (
        <div className={`slider-option ${classList}`}>
            <label htmlFor={id}></label>
            <input type='radio' id={id} onChange={() => onChange(id)} checked={checked} />
        </div>
    );
}

export { SliderOption };
