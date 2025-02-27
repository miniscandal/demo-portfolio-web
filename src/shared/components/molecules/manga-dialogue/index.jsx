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
            <div className='manga-dialogue__message'>
                <div>
                    {children}
                </div>
            </div>
        </div>
    );
}

export { MangaDialogue };
