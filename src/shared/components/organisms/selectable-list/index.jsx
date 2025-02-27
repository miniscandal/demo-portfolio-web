import { useEffect, useState } from 'react';

import './style.css';


function SelectableList({
    defaultSelectItemId = null,
    items = [{
        id: 'one',
        Component: () => { }
    }],
    onChange = () => { }
}) {
    const [selectedItem, setSelectedItem] = useState(defaultSelectItemId);

    useEffect(() => {
        onChange(selectedItem);
    }, [onChange, selectedItem]);

    const handleClick = (event) => {
        const listItem = event.target.closest('li');

        if (!listItem) {
            return;
        };

        setSelectedItem(listItem.dataset.id);
    };

    const itemComponents = items.map((value, index) => {
        const { id, Component } = value;


        return (
            <li
                key={`${index}-${id}`}
                data-id={id}
                data-checked={selectedItem === id}
            >
                {Component}
            </li>
        );
    });


    return (
        <ul className='selectable-list' onClick={handleClick}>
            {itemComponents}
        </ul>
    );
}

export { SelectableList };
