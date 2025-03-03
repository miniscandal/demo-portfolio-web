import { SelectableList } from '@shared-molecules/selectable-list';

import './style.css';


function MangaPageMain({
    MangaPanels = [],
    onSelectPanelId = () => { }
}) {
    const items = MangaPanels.map((value, index) => ({
        ...value,
        Component: <value.Component label={`Ep 0${index + 1}`} isMiniature={true} />
    }));


    return (
        <div className='manga-page-main'>
            <SelectableList items={items} onChange={onSelectPanelId} />
        </div>
    );
}

export { MangaPageMain };
