import { createContext } from 'react';

import { en as sensorMonitoring } from '@shared-mocks/data/personal-projects/sensor-monitoring.json';

const { name, descriptions, objectives, expectedResults, planning } = sensorMonitoring;

const Provider = {
    name,
    descriptions,
    objectives,
    expectedResults,
    planning
};

const SensorMonitoringProvider = Provider;

const MangaContext = createContext(Provider);


function MangaContextProvider({
    children,
    provider = Provider
}) {

    return (
        <MangaContext.Provider value={provider}>
            {children}
        </MangaContext.Provider>
    );
}

export {
    MangaContext,
    MangaContextProvider,
    SensorMonitoringProvider
};
