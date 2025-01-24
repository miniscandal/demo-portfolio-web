import { getDataBlob } from '@core-services-interceptors/api-fetch';

import { photoPersonalUrl } from '@core-services-api-rest-endpoints/professional-data';

import { isBlob } from '@shared-services/validate-value-type';

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
