import { Paragraph } from '@shared-atoms/paragraph';
import { Span } from '@shared-atoms/span';

import './style.css';


function UnorderedList({
    selectListItem = undefined,
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

        handleClick(listItem);
    };

    const liElements = items.map((value, index) => {
        const { id, ChildrenComponent, ...properties } = value;
        const isSelected = id === selectListItem;

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
        <ul className='unordered-list' onClick={internalHandleClick}>
            {liElements}
        </ul>
    );
}

export { UnorderedList };
