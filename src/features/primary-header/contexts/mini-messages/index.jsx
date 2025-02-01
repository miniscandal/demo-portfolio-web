import { createContext } from 'react';

import { en } from '@shared-mocks/data/mini-messages/mini-messages.json';


const Provider = {
    miniMessages: en.miniMessages
};

const MiniMessagesContext = createContext(Provider);


function MiniMessagesProvider({ children }) {

    return (
        <MiniMessagesContext.Provider value={Provider}>
            {children}
        </MiniMessagesContext.Provider>
    );
}

export {
    MiniMessagesContext,
    MiniMessagesProvider
};
