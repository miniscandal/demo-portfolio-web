import { Title } from '@shared-atoms/title';
import { MyWorkHistory } from '@feat-home-organisms/my-work-history';

import './style.css';


function MainContent() {
    const titleWorkHistory = {
        text: 'PERFORMANCE AND RESULTS',
        color: 'charcoal-grey',
        type: 'h2',
        decorated: true
    };
    const titleKnowledge = {
        text: 'Demonstrating my skills and knowledge',
        color: 'charcoal-grey',
        type: 'h2',
        decorated: true
    };
    const titleWhatDo = {
        text: 'What I Do',
        color: 'charcoal-grey',
        type: 'h2',
        decorated: true
    };

    return (
        <main>
            <article>
                <Title {...titleWorkHistory} />
                <MyWorkHistory />
            </article>
            <article>
                <Title {...titleKnowledge} />
            </article>
            <article>
                <Title {...titleWhatDo} />
            </article>
        </main>
    );
}

export { MainContent };
