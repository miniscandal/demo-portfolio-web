import './style.css';


function RadioInputIndicator({
    checked = false
}) {
    const classList = [
        checked ? 'checked' : ''
    ];


    return (
        <div className={`radio-input-indicator ${classList.join(' ')}`}></div>
    );
}

export { RadioInputIndicator };
