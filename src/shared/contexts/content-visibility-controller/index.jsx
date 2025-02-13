import { createContext } from 'react';


const Provider = {
    radioInputsData: [
        {
            htmlFor: 'option-01',
            properties: {}
        },
        {
            htmlFor: 'option-02',
            properties: {}
        }
    ],
    selectDefaultHtmlFor: 'option-01',
    groupName: 'slider-control',
    detailsSummary: {
        text: '',
        open: null
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
