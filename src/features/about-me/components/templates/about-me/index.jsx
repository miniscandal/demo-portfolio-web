import { ContentVisibilityControllerProvider } from '@shared-contexts/content-visibility-controller';

import { SelfDescriptionPresentationProfile } from '@feat-about-me-organisms/self-description-presentation-profile';
import { TechnologicalTools } from '@feat-about-me-organisms/technological-tools';
import { GoalsThrough } from '@feat-about-me-organisms/goals-through';
import { SelectTechToolsKnowledge } from '@feat-about-me-molecules/select-tech-tools-knowledge';

import { DecoratedTitle } from '@shared-molecules/decorated-title';

import { Provider } from '@shared-contexts/content-visibility-controller/providers/about-me';

import './style.css';


function AboutMe() {
    const updatedProvider = structuredClone(Provider);

    updatedProvider.LabelComponent = SelectTechToolsKnowledge;


    return (
        <section className='about-me'>
            <DecoratedTitle text='ABOUT ME' />
            <article>
                <SelfDescriptionPresentationProfile />
                <ContentVisibilityControllerProvider Provider={updatedProvider}>
                    <TechnologicalTools />
                </ContentVisibilityControllerProvider>
                <GoalsThrough />
            </article>
        </section>
    );
}

export { AboutMe };
