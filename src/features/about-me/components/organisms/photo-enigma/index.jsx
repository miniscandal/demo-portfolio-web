import { Image } from '@shared-atoms/image';

import { SuspenseRenderComponent } from '@shared-react-components/suspense-render-component';

import { useResourcePhoto } from '@shared-custom-hooks/use-resource-photo';

import './style.css';


function PhotoEnigma({
    hidden = true
}) {
    const classList = [
        hidden ? 'hidden' : ''
    ];
    const renderLoadingComponent = () => {
        const image = {
            size: 'my-photo',
            alt: 'My photo with casual style'
        };

        return (
            <Image {...image} />
        );
    };
    const renderLoadedComponent = ({ data }) => {
        const { url } = data;
        const image = {
            src: url,
            size: 'my-photo',
            alt: 'My photo with casual style',
            useSuspense: true
        };

        return (
            <Image {...image} />
        );
    };
    const suspenseRenderComponent = {
        renderLoadedComponent,
        renderLoadingComponent,
        useResource: useResourcePhoto
    };


    return (
        <div className={`photo-enigma ${classList.join(' ')}`}>
            <SuspenseRenderComponent {...suspenseRenderComponent} />
        </div>
    );
}

export { PhotoEnigma };
