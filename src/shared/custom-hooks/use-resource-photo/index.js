import { use } from 'react';

import { resourcePersonalPhotos } from '@core-services-api-rest-github-profile/data/resources-personal-photos';


function useResourcePhoto() {
    const { promise } = resourcePersonalPhotos();
    const data = use(promise);


    return {
        data
    };
}

export { useResourcePhoto };
