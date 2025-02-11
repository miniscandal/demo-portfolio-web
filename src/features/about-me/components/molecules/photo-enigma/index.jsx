import { Picture } from '@shared-atoms/picture';

import { SuspenseRenderComponent } from '@shared-react-components/suspense-render-component';

import { useResourcePhoto } from '@shared-custom-hooks/use-resource-photo';

import './style.css';


function PhotoEnigma({
    hidden = true
}) {
    const classList = [
        hidden ? 'hidden' : ''
    ];
    const renderLoadingComponent = () => <Picture size='my-photo' />;
    const renderLoadedComponent = ({ data: { url } }) => (
        <Picture src={url} size='auto' alt='My photo with casual style' />
    );


    return (
        <div className={`photo-enigma ${classList.join(' ')}`}>
            <SuspenseRenderComponent
                renderLoadedComponent={renderLoadedComponent}
                renderLoadingComponent={renderLoadingComponent}
                useResource={useResourcePhoto}
            />
        </div>
    );
}

export { PhotoEnigma };
