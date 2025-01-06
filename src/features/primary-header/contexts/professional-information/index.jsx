import { createContext } from 'react';

import cvFile from '@assets-documents/cv-oscar-gonzalez.pdf';

const Provider = {
    name: 'Oscar González',
    discipline: 'Computer Systems Engineering',
    fileHref: cvFile,
    fileName: 'cv-oscar-gonzalez'
};

const ProfessionalInformationContext = createContext(Provider);



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
