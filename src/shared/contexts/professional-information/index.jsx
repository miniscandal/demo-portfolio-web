import { createContext } from 'react';

import cvFile from '@assets-documents/cv-oscar-gonzalez.pdf';

const ProfessionalInformationContext = createContext(null);

const Provider = {
    name: 'Oscar González',
    discipline: 'Computer System Engineer',
    fileHref: cvFile,
    fileName: 'cv-oscar-gonzalez'
};


function ProfessionalInformationProvider({ children }) {

    return (
        <ProfessionalInformationContext.Provider value={Provider}>
            {children}
        </ProfessionalInformationContext.Provider>
    );
}

export {
    ProfessionalInformationContext,
    ProfessionalInformationProvider
};
