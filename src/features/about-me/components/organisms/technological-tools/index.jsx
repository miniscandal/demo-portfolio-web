import { SliderTechnologicalTools } from '@feat-about-me-organisms/slider-technological-tools';

import { Title } from '@shared-atoms/title';

import './style.css';


function TechnologicalTools() {

    return (
        <section className='technological-tools'>
            <div className='technological-tools__div'>
                <Title text='TechnologicalTools' type='h3' color='light' />
            </div>
            <div className='technological-tools__div'>
                <SliderTechnologicalTools />
            </div>
        </section>
    );
}

export { TechnologicalTools };
