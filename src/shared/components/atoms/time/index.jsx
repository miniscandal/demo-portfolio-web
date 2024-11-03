import './style.css';


function Time({
    year = 1603,
    month = 9
}) {
    const dateTime = `${year}-${String(month).padStart(2, '0')}-01`;
    const formatDate = (year, month) => {
        const monthNames = [
            'January', 'February', 'March', 'April', 'May', 'June',
            'July', 'August', 'September', 'October', 'November', 'December'
        ];
        return `${monthNames[month - 1]} ${year}`;
    };
    const textDateTime = formatDate(year, month);


    return (
        <time className='time' dateTime={dateTime}>
            {textDateTime}
        </time>
    );
};

export { Time };
