import './style.css';


function Time({
    size = 'regular',
    color = 'light',
    year = 1603,
    month = 9,
    day = 3
}) {
    const classList = [
        size,
        color
    ];
    const formattedMonth = String(month).padStart(2, '0');
    const formattedDay = String(day).padStart(2, '0');
    const dateTime = `${year}-${formattedMonth}-${formattedDay}`;

    const formatDate = (year, month) => {
        const monthNames = [
            'January', 'February', 'March', 'April', 'May', 'June',
            'July', 'August', 'September', 'October', 'November', 'December'
        ];
        return `${monthNames[month - 1]} ${year}`;
    };

    const textDateTime = formatDate(year, month);

    return (
        <time className={`time ${classList.join(' ')}`} dateTime={dateTime}>
            {textDateTime}
        </time>
    );
};

export { Time };
