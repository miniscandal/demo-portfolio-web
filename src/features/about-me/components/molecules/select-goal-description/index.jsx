import './style.css';


function SelectGoalDescription({
    checked = false,
    children
}) {
    const classList = [
        checked ? 'checked' : ''
    ];


    return (
        <label className={`select-goal-description ${classList.join(' ')}`}>
            {children}
        </label>
    );
}

export { SelectGoalDescription };
