import { createContext } from 'react';

import { en } from '@shared-mocks/data/professional-information/goals.json';


const { goals } = en;

const Provider = {
    goals
};

const ProfessionalApproachContext = createContext(Provider);


function ProfessionalApproachProvider({ children }) {

    return (
        <ProfessionalApproachContext.Provider value={Provider}>
            {children}
        </ProfessionalApproachContext.Provider>
    );
}

export {
    ProfessionalApproachContext,
    ProfessionalApproachProvider
}
