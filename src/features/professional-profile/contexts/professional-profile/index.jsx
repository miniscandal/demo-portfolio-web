import { createContext } from 'react';

import { en } from '@shared-mocks/data/technical-profile/technical-profile.json';

import { Computer } from '@shared-atoms/icon-font-svg/variants';
import { BroadcastOnHome } from '@shared-atoms/icon-font-svg/variants';
import { Terminal } from '@shared-atoms/icon-font-svg/variants';
import { EditNote } from '@shared-atoms/icon-font-svg/variants';
import { Database } from '@shared-atoms/icon-font-svg/variants';

import { PIXEL_ART_ANIME_NAKANO_MIKU_CARD_ANIMATION } from '@shared-atoms/pixel-art/variants';
import { PIXEL_ART_ANIME_NAKANO_ITSUKI_CARD_ANIMATION } from '@shared-atoms/pixel-art/variants';
import { PIXEL_ART_ANIME_NAKANO_YOTSUBA_CARD_ANIMATION } from '@shared-atoms/pixel-art/variants';
import { PIXEL_ART_ANIME_NAKANO_ICHIKA_CARD_ANIMATION } from '@shared-atoms/pixel-art/variants';
import { PIXEL_ART_ANIME_NAKANO_NINO_CARD_ANIMATION } from '@shared-atoms/pixel-art/variants';

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
        pixelArtCharacter: PIXEL_ART_ANIME_NAKANO_ITSUKI_CARD_ANIMATION
    },
    {
        name: internetOfThings.name,
        description: internetOfThings.description,
        iconFontSvg: BroadcastOnHome,
        pixelArtCharacter: PIXEL_ART_ANIME_NAKANO_MIKU_CARD_ANIMATION
    },
    {
        name: softwareDeveloper.name,
        description: softwareDeveloper.description,
        iconFontSvg: Terminal,
        pixelArtCharacter: PIXEL_ART_ANIME_NAKANO_YOTSUBA_CARD_ANIMATION
    },
    {
        name: functionalAnalyst.name,
        description: functionalAnalyst.description,
        iconFontSvg: EditNote,
        pixelArtCharacter: PIXEL_ART_ANIME_NAKANO_ICHIKA_CARD_ANIMATION
    },
    {
        name: databaseAdministration.name,
        description: databaseAdministration.description,
        iconFontSvg: Database,
        pixelArtCharacter: PIXEL_ART_ANIME_NAKANO_NINO_CARD_ANIMATION
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
