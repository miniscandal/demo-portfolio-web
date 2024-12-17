import { createContext } from 'react';

import { en } from '@shared-resources-data/professional-information/technical-competencies-expertise.json';

import { Computer } from '@shared-atoms/icon-font-svg/variants';
import { BroadcastOnHome } from '@shared-atoms/icon-font-svg/variants';
import { Terminal } from '@shared-atoms/icon-font-svg/variants';
import { EditNote } from '@shared-atoms/icon-font-svg/variants';
import { Database } from '@shared-atoms/icon-font-svg/variants';

import { PIXEL_ART_ANIME_MIKU_NAKANO_CARD } from '@shared-molecules/pixel-art/variants';
import { PIXEL_ART_ANIME_ITSUKI_NAKANO_CARD } from '@shared-molecules/pixel-art/variants';
import { PIXEL_ART_ANIME_YOTSUBA_NAKANO_CARD } from '@shared-molecules/pixel-art/variants';
import { PIXEL_ART_ANIME_ICHIKA_NAKANO_CARD } from '@shared-molecules/pixel-art/variants';
import { PIXEL_ART_ANIME_NINO_NAKANO_CARD } from '@shared-molecules/pixel-art/variants';

const {
    computerSystemEngineering,
    internetOfThings,
    softwareDeveloper,
    functionalAnalyst,
    databaseAdministration
} = en;

const ProfessionalProfileContext = createContext(null);

const Provider = [
    {
        name: computerSystemEngineering.name,
        // description: computerSystemEngineering.description,
        iconFontSvg: Computer,
        description: databaseAdministration.description,
        pixelArtCharacter: PIXEL_ART_ANIME_ITSUKI_NAKANO_CARD
    },
    {
        name: internetOfThings.name,
        // description: internetOfThings.description,
        iconFontSvg: BroadcastOnHome,
        description: databaseAdministration.description,
        pixelArtCharacter: PIXEL_ART_ANIME_MIKU_NAKANO_CARD
    },
    {
        name: softwareDeveloper.name,
        // description: softwareDeveloper.description,
        iconFontSvg: Terminal,
        description: databaseAdministration.description,
        pixelArtCharacter: PIXEL_ART_ANIME_YOTSUBA_NAKANO_CARD
    },
    {
        name: functionalAnalyst.name,
        // description: functionalAnalyst.description,
        iconFontSvg: EditNote,
        description: databaseAdministration.description,
        pixelArtCharacter: PIXEL_ART_ANIME_ICHIKA_NAKANO_CARD
    },
    {
        name: databaseAdministration.name,
        description: databaseAdministration.description,
        iconFontSvg: Database,
        pixelArtCharacter: PIXEL_ART_ANIME_NINO_NAKANO_CARD
    },
];


function ProfessionalProfileProvider({ children }) {

    return (
        <ProfessionalProfileContext.Provider value={Provider}>
            {children}
        </ProfessionalProfileContext.Provider>
    );
}

export {
    ProfessionalProfileContext,
    ProfessionalProfileProvider
};
