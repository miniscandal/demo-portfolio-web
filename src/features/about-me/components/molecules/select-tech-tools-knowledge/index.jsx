import './style.css';


function SelectTechToolsKnowledge({
    text = 'Label Select View Slider',
    checked = false,
    children
}) {
    const classList = [
        checked ? 'checked' : ''
    ];

    return (
        <label className={`select-tech-tools-knowledge ${classList.join(' ')}`}>
            {text}
            {children}
        </label>
    );
}

export { SelectTechToolsKnowledge };
