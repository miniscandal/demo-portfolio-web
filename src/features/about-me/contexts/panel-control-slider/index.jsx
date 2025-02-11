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
    LabelComponent: <label></label>
};

const PanelControlSliderContext = createContext(Provider);


function PanelControlSliderProvider({ Provider, children }) {


    return (
        <PanelControlSliderContext.Provider value={Provider}>
            {children}
        </PanelControlSliderContext.Provider>
    );
}

export {
    PanelControlSliderContext,
    PanelControlSliderProvider
};
