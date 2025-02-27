import { MangaPanel } from '../components/molecules/manga-panel';

const createMangaPanel = (number, children) => (
    <MangaPanel number={`${number}`}>
        {children}
    </MangaPanel>
);

export { createMangaPanel };
