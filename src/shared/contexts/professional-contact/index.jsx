import { createContext } from 'react';

import cvFile from '@assets-documents/cv-oscar-gonzalez.pdf';

const ProfessionalContactContext = createContext(null);

const Provider = {
    name: 'Oscar González',
    discipline: 'Computer System Engineer',
    fileHref: cvFile,
    fileName: 'cv-oscar-gonzalez'
};


function ProfessionalContactProvider({ children }) {

    return (
        <ProfessionalContactContext.Provider value={Provider}>
            {children}
        </ProfessionalContactContext.Provider>
    );
}

export { ProfessionalContactProvider, ProfessionalContactContext };
