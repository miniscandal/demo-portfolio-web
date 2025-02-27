import { useState } from 'react';

import { MangaPageMain } from '@feat-personal-software-projects-organisms/manga-page-main';
import { MangaPageSecondary } from '@feat-personal-software-projects-organisms/manga-page-secondary';
import { MangaPrimarySideBar } from '@feat-personal-software-projects-organisms/manga-primary-side-bar';

import './style.css';


function Manga() {
    const [readMangaPageId, setReadMangaPageId] = useState(null);


    return (
        <article className='manga'>
            {
                !readMangaPageId
                    ? <MangaPageMain onSelectPageId={setReadMangaPageId} />
                    : <MangaPageSecondary readMangaPageId={readMangaPageId} />
            }
            <MangaPrimarySideBar setReadMangaPageId={setReadMangaPageId} />
        </article>
    );
}

export { Manga };
