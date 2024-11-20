import { useState } from 'react';

import { MangaPageMain } from '@feat-home-personal-software-projects-organisms/manga-page-main';
import { MangaPageSecondary } from '@feat-home-personal-software-projects-organisms/manga-page-secondary';

import './style.css';


function Manga() {
    const [readMangaPanelId, setReadMangaPanelId] = useState(null);
    const mangaPage = {
        state: {
            readMangaPanelId,
            setReadMangaPanelId
        }
    };

    return (
        <section className='manga'>
            {
                !readMangaPanelId
                    ? <MangaPageMain {...mangaPage} />
                    : <MangaPageSecondary  {...mangaPage} />
            }
        </section>
    );
}

export { Manga };
