import { useState } from 'react';

import { MangaPageMain } from '@feat-personal-software-projects-organisms/manga-page-main';
import { MangaPageSecondary } from '@feat-personal-software-projects-organisms/manga-page-secondary';
import { MangaPrimarySideBar } from '@feat-personal-software-projects-organisms/manga-primary-side-bar';

import './style.css';


function Manga() {
    const [readMangaPanelId, setReadMangaPanelId] = useState(null);
    const mangaPage = {
        state: {
            readMangaPanelId,
            setReadMangaPanelId
        }
    };
    const primarySideBar = {
        state: {
            setReadMangaPanelId
        }
    };

    return (
        <section className='manga'>
            <div className='manga__div'>
                {
                    !readMangaPanelId
                        ? <MangaPageMain {...mangaPage} />
                        : <MangaPageSecondary  {...mangaPage} />
                }
            </div>
            <MangaPrimarySideBar {...primarySideBar} />
        </section>
    );
}

export { Manga };
