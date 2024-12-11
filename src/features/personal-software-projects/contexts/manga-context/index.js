import { createContext } from 'react';

import { en as sensorMonitoring } from '@shared-resources-data/personal-projects/sensor-monitoring.json';

const MangaContext = createContext(null);

const { name, descriptions, objectives, expectedResults, planning } = sensorMonitoring;

const ProviderProjectSensorMonitoring = {
    name,
    descriptions,
    objectives,
    expectedResults,
    planning
};

export {
    MangaContext,
    ProviderProjectSensorMonitoring
};
