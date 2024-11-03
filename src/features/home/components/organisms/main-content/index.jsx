import { MyWorkHistory } from '@feat-home-organisms/my-work-history';

import './style.css';


function MainContent() {

    return (
        <main className='main'>
            <article>
                <MyWorkHistory />
            </article>
            <article>
                {/* <MyWorkHistory /> */}
            </article>
        </main>
    );
}

export { MainContent };
