import { MyWorkHistory } from '@feat-home-organisms/my-work-history';

import './style.css';


function MainContent() {

    return (
        <main>
            <div className='main-content'>
                <article>
                    <MyWorkHistory />
                </article>
                <article>
                    <MyWorkHistory />
                </article>
            </div>
        </main>
    );
}

export { MainContent };
