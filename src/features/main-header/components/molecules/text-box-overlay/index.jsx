import { Paragraph } from '@shared-atoms/paragraph';
import { Span } from '@shared-atoms/span';

import './style.css';


function TextBoxOverlay({
    text = 'Text Box Overlay',
    symbol = '01',
    size = 'regular',
    type = ''
}) {
    const classList = [
        size,
        type
    ];

    return (
        <div className={`text-box-overlay ${classList.join(' ')}`}>
            <div className='text-box-overlay__div'>
                <Paragraph>
                    <Span text={symbol} />
                    {`\u000A ${text}`}
                </Paragraph>
            </div>
        </div>
    );
}

export { TextBoxOverlay };
