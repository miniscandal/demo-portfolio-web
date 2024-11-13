import { createContext } from 'react';

import { sensorMonitoring } from '@shared-resources-data/personal-projects/sensor-monitoring.json';

const MangaContext = createContext(null);

const { en: { name, description, objectives } } = sensorMonitoring;

const ProviderProjectSensorMonitoring = {
    name,
    description,
    objectives
};

export {
    MangaContext,
    ProviderProjectSensorMonitoring
};
