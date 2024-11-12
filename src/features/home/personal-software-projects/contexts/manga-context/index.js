import { createContext } from 'react';

const MangaContext = createContext(null);

const ProviderProjectSensorMonitoring = {
    name: 'Sensor Monitoring',
    descriptionEnglish: 'Real-time display of temperature and humidity information transmitted by sensors for precise and detailed control of the environment.',
};

export {
    MangaContext,
    ProviderProjectSensorMonitoring
};
