import { getDataBlob } from '@core-http-client/fetch';

import { photoPersonalUrl } from '@core-services-api-rest-github-profile/end-points';

import { isBlob } from '@core-validators/data-type-validation';


let cache = new Map();

const getData = ({ blob }) => {
    const newBlob = isBlob({ blob }) ? blob : new Blob([], { type: 'image/png' });
    const url = URL.createObjectURL(newBlob);


    return { url };
};


function resourcePersonalPhotos() {
    const url = photoPersonalUrl;

    if (!cache.has(url)) {
        cache.set(url, getDataBlob({ url, getData }));
    }


    return {
        promise: cache.get(url)
    };
}

export { resourcePersonalPhotos };
