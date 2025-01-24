import { use } from 'react';

import { resourcePersonalPhotos } from '@core-services-data/resources-personal-photos';


function useResourcePhoto() {
    const { promise } = resourcePersonalPhotos();
    const data = use(promise);


    return {
        data
    };
}

export { useResourcePhoto };
