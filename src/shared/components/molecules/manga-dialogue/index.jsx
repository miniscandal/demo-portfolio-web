import './style.css';


function MangaDialogue({
    children,
    size = 'regular'
}) {
    const classList = [
        size
    ];

    return (
        <div className={`manga-dialogue ${classList.join(' ')}`}>
            <div className='manga-dialogue__element'>
                <div className='manga-dialogue__element--message'>
                    {children}
                </div>
            </div>
        </div>
    );
}

export { MangaDialogue };
