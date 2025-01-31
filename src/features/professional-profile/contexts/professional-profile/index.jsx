import { createContext } from 'react';

import { en } from '@shared-mocks/data/technical-profile/technical-profile.json';

import { Computer } from '@shared-atoms/icon-font-svg/variants';
import { BroadcastOnHome } from '@shared-atoms/icon-font-svg/variants';
import { Terminal } from '@shared-atoms/icon-font-svg/variants';
import { EditNote } from '@shared-atoms/icon-font-svg/variants';
import { Database } from '@shared-atoms/icon-font-svg/variants';

import { PIXEL_ART_ANIME_MIKU_NAKANO_CARD } from '@shared-atoms/pixel-art/variants';
import { PIXEL_ART_ANIME_ITSUKI_NAKANO_CARD } from '@shared-atoms/pixel-art/variants';
import { PIXEL_ART_ANIME_YOTSUBA_NAKANO_CARD } from '@shared-atoms/pixel-art/variants';
import { PIXEL_ART_ANIME_ICHIKA_NAKANO_CARD } from '@shared-atoms/pixel-art/variants';
import { PIXEL_ART_ANIME_NINO_NAKANO_CARD } from '@shared-atoms/pixel-art/variants';

const {
    computerSystemEngineering,
    internetOfThings,
    softwareDeveloper,
    functionalAnalyst,
    databaseAdministration
} = en;

const Provider = [
    {
        name: computerSystemEngineering.name,
        description: computerSystemEngineering.description,
        iconFontSvg: Computer,
        pixelArtCharacter: PIXEL_ART_ANIME_ITSUKI_NAKANO_CARD
    },
    {
        name: internetOfThings.name,
        description: internetOfThings.description,
        iconFontSvg: BroadcastOnHome,
        pixelArtCharacter: PIXEL_ART_ANIME_MIKU_NAKANO_CARD
    },
    {
        name: softwareDeveloper.name,
        description: softwareDeveloper.description,
        iconFontSvg: Terminal,
        pixelArtCharacter: PIXEL_ART_ANIME_YOTSUBA_NAKANO_CARD
    },
    {
        name: functionalAnalyst.name,
        description: functionalAnalyst.description,
        iconFontSvg: EditNote,
        pixelArtCharacter: PIXEL_ART_ANIME_ICHIKA_NAKANO_CARD
    },
    {
        name: databaseAdministration.name,
        description: databaseAdministration.description,
        iconFontSvg: Database,
        pixelArtCharacter: PIXEL_ART_ANIME_NINO_NAKANO_CARD
    },
];

const ProfessionalProfileContext = createContext(Provider);


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
