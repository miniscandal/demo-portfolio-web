import { Span } from '@shared-atoms/span';
import { Paragraph } from '@shared-atoms/paragraph';

import './style.css';


function SquareShapeAnchorTag({
    text = 'anchor tag',
    symbol = '01',
    size = 'regular'
}) {
    const classList = [
        size
    ];

    return (
        <div className={`square-shaped-anchor-tag ${classList.join(' ')}`}>
            <Paragraph color='light-silver'>
                <Span text={symbol} />
                {text}
            </Paragraph>
        </div>
    );
}

export { SquareShapeAnchorTag };
