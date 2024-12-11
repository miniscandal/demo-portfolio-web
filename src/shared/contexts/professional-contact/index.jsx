import { createContext } from 'react';

import { format } from '@shared-resources-contact/mailto-format.json';
import { github, linkedin } from '@shared-resources-contact/social-networks.json';

const ProfessionalContactContext = createContext(null);

const Provider = {
    github,
    linkedin,
    email: 'oscar01dev@gmail.com',
    emailFormat: format
};


function ProfessionalContactProvider({ children }) {

    return (
        <ProfessionalContactContext.Provider value={Provider}>
            {children}
        </ProfessionalContactContext.Provider>
    );
}

export {
    ProfessionalContactContext,
    ProfessionalContactProvider
};
