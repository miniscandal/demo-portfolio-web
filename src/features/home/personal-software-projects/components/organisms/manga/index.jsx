import { useState } from 'react';

import { MangaPageMain } from '@feat-home-personal-software-projects-templates/manga-page-main';
import { MangaPageSecondary } from '@feat-home-personal-software-projects-templates/manga-page-secondary';

import { MANGA_PAGE_MAIN_ID } from '@feat-home-personal-software-projects-constants/manga-page-identifiers';
import { MANGA_PAGE_SECONDARY_ID } from '@feat-home-personal-software-projects-constants/manga-page-identifiers';


import './style.css';


function Manga() {
    const [selectedMangaPage, setSelectedMangaPage] = useState(MANGA_PAGE_MAIN_ID);


    return (
        <section>
            {
                selectedMangaPage
                    ? <MangaPageMain />
                    : <MangaPageSecondary />
            }

        </section>
    );
}

export { Manga };
