import { Suspense } from 'react';


function Loading({ renderComponent }) {

    return renderComponent();
}


function Loaded({ renderComponent, useResource }) {
    const { data } = useResource();


    return renderComponent({ data });
}

function SuspenseRenderComponent({
    renderLoadedComponent,
    renderLoadingComponent,
    useResource
}) {
    const loading = {
        renderComponent: renderLoadingComponent
    };
    const loaded = {
        renderComponent: renderLoadedComponent,
        useResource
    };



    return (
        <Suspense fallback={<Loading {...loading} />}>
            <Loaded {...loaded} />
        </Suspense>
    );
}

export { SuspenseRenderComponent };
