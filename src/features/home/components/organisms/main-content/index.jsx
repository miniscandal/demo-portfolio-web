import { Title } from '@shared-atoms/title';
import { MyWorkHistory } from '@feat-home-organisms/my-work-history';

import './style.css';


function MainContent() {
    const title = {
        text: 'PERFORMANCE AND RESULTS',
        color: 'charcoal-grey',
        type: 'h2',
        decorated: true
    };

    return (
        <main>
            <article>
                <Title {...title} />
                <MyWorkHistory />
            </article>
            <article>
                <MyWorkHistory />
            </article>
        </main>
    );
}

export { MainContent };
