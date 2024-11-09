import { Paragraph } from '@shared-atoms/paragraph';
import { Span } from '@shared-atoms/span';

import './style.css';


function UnorderedList({
    idSelected = undefined,
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
        const liElement = event.target.closest('li');

        if (!liElement) {
            return;
        };

        handleClick(liElement);
    };

    const liElements = items.map((value, index) => {
        const { id, ChildrenComponent, ...properties } = value;
        const panelActive = id === idSelected;

        return (
            <li
                key={`${id}-${index}`}
                data-id={id}
                className={panelActive ? 'panel-active' : ''}
            >
                <Component {...properties}>
                    {
                        ChildrenComponent && <ChildrenComponent panelActive={panelActive} />
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
