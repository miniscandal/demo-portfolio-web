import { SliderTechnologicalTools } from '@feat-about-me-organisms/slider-technological-tools';

import { Title } from '@shared-atoms/title';

import './style.css';


function TechnologicalTools() {
    const title = {
        text: 'My Technological Tools',
        type: 'h3',
        color: 'light'
    };


    return (
        <section className='technological-tools'>
            <div className='technological-tools__div'>
                <Title {...title} />
            </div>
            <div className='technological-tools__div'>
                <SliderTechnologicalTools />
            </div>
        </section>
    );
}

export { TechnologicalTools };
