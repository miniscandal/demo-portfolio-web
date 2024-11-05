import { PrimaryHeader } from '@feat-home-organisms/primary-header';
import { MainContent } from '@feat-home-organisms/main-content';
import { PrimaryFooter } from '@feat-home-organisms/primary-footer';

import './style.css';

function Home() {

    return (
        <div className='home'>
            <PrimaryHeader />
            <MainContent />
            <PrimaryFooter />
        </div>
    );
}

export { Home };
