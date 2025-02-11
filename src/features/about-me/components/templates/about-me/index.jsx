import { PanelControlSliderProvider } from '@feat-about-me-contexts/panel-control-slider';

import { SelfDescriptionPresentationProfile } from '@feat-about-me-organisms/self-description-presentation-profile';
import { TechnologicalTools } from '@feat-about-me-organisms/technological-tools';
import { GoalsThrough } from '@feat-about-me-organisms/goals-through';
import { SelectTechToolsKnowledge } from '@feat-about-me-molecules/select-tech-tools-knowledge';

import { DecoratedTitle } from '@shared-molecules/decorated-title';

import './style.css';


function AboutMe() {
    const Provider = {
        radioInputsData: [
            {
                htmlFor: '01-CS',
                text: 'Current Specialization'
            },
            {
                htmlFor: '02-DE',
                text: 'Development Environment'
            },
            {
                htmlFor: '03-APA',
                text: 'Active Practical Approach'
            },
            {
                htmlFor: '04-MC',
                text: 'Main Concepts '
            }
        ],
        selectDefaultHtmlFor: '01-CS',
        groupName: 'about-me',
        LabelComponent: SelectTechToolsKnowledge
    };


    return (
        <section className='about-me'>
            <DecoratedTitle text='ABOUT ME' color='light' />
            <div className='about-me__div'>
                <SelfDescriptionPresentationProfile />
                <PanelControlSliderProvider Provider={Provider}>
                    <TechnologicalTools />
                </PanelControlSliderProvider>
                <GoalsThrough />
            </div>
        </section>
    );
}

export { AboutMe };
