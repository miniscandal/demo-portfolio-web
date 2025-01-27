import { createContext } from 'react';

import { format } from '@shared-mocks/data/contact/mailto-format.json';
import { github, linkedin } from '@shared-mocks/data/contact/social-networks.json';


const Provider = {
    github,
    linkedin,
    email: 'oscar01dev@gmail.com',
    emailFormat: format
};

const ProfessionalContactContext = createContext(Provider);


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
