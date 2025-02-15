import { createContext } from 'react';


const Provider = {
    labelData: [
        {
            htmlFor: 'option-01',
            customProperties: {}
        },
        {
            htmlFor: 'option-02',
            customProperties: {}
        }
    ],
    groupName: 'option',
    selectDefaultHtmlFor: 'option-01',
    detailsSummary: {
        text: 'Option List'
    },
    LabelComponent: <label></label>
};

const ContentVisibilityControllerContext = createContext(Provider);


function ContentVisibilityControllerProvider({ Provider, children }) {


    return (
        <ContentVisibilityControllerContext.Provider value={Provider}>
            {children}
        </ContentVisibilityControllerContext.Provider>
    );
}

export {
    ContentVisibilityControllerContext,
    ContentVisibilityControllerProvider
};
