import { Paragraph } from '@shared-atoms/paragraph';
import { Span } from '@shared-atoms/span';

import './style.css';


function UnorderedList({
    id = null,
    selectListItemId = undefined,
    Component = Paragraph,
    items = [
        {
            id: 'one',
            text: 'item one',
            ChildrenComponent: (({ text }) => (<Span text={text} />))
        },
        {
            id: 'two',
            text: 'item two'
        },
    ],
    handleClick = (liElement) => { console.log(liElement); }
}) {
    const internalHandleClick = (event) => {
        const listItem = event.target.closest('li');

        if (!listItem) {
            return;
        };

        handleClick(listItem, listItem.closest('ul').dataset.id);
    };

    const liElements = items.map((value, index) => {
        const { id, ChildrenComponent, ...properties } = value;

        const isSelected = id === selectListItemId;

        return (
            <li
                key={`${id}-${index}`}
                data-id={id}
                className={isSelected ? 'panel-active' : ''}
            >
                <Component {...properties}>
                    {
                        ChildrenComponent && <ChildrenComponent isSelected={isSelected} />
                    }
                </Component>
            </li>
        );
    });

    return (
        <ul className='unordered-list' onClick={internalHandleClick} data-id={id}>
            {liElements}
        </ul>
    );
}

export { UnorderedList };