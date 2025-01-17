import { MiniGameProvider } from '@feat-about-me-contexts/mini-game';

import { MainSectionRightSide } from '@feat-about-me-organisms/main-section-right-side';
import { DescriptiveCard } from '@feat-about-me-organisms/descriptive-card';

import './style.css';


function MainSection() {

    return (
        <section className='main-section'>
            <MiniGameProvider>
                <DescriptiveCard />
                <div className='main-section__div'>
                    <MainSectionRightSide />
                </div>
            </MiniGameProvider>
        </section>
    );
}

export { MainSection };
