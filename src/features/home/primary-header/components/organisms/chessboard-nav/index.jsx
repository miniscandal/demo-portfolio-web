import { SquareShapeAnchorTag } from '../../molecules/square-shaped-anchor-tag';

import './style.css';


function ChessboardNav() {
    const classList = [];
    const itemList = [
        {
            text: null,
            symbol: null,
        },
        {
            text: 'EXPERIENCE',
            symbol: '01',
        },
        {
            text: 'PORTFOLIO',
            symbol: '02',
        },
        {
            text: 'WHAT I DO',
            symbol: '03',
        },
        {
            text: 'CONTACT',
            symbol: '04',
        },
    ];

    const SquareShapeAnchorLinks = itemList.map((value, index) => (
        <li key={`${index}-${value.text}`}>
            <SquareShapeAnchorTag {...value} size='auto' />
        </li>
    ));

    return (
        <nav className={`chessboard-nav ${classList.join(' ')}`}>
            <ul>
                {SquareShapeAnchorLinks}
            </ul>
        </nav >
    );
}

export { ChessboardNav };
