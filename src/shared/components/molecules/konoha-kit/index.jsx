import { ParchmentToolName } from '@shared-molecules/parchment-tool-name';

import { HitaiAte } from '@shared-molecules/hitai-ate';

import './style.css';


function KonohaKit({
    name = undefined,
    iconSrc = undefined,
    color: bgColor = undefined
}) {
    const parchmentToolName = {
        name,
        bgColor,
    };
    const hitaiAte = {
        src: iconSrc,
        color: bgColor
    };


    return (
        <div className='konoha-kit'>
            <div className='konoha-kit__div--hitai-ate'>
                <HitaiAte {...hitaiAte} />
            </div>
            <div className='konoha-kit__div--desktop'>
                <ParchmentToolName {...parchmentToolName} />
            </div>
            <div className='konoha-kit__div--mobile'>
                <ParchmentToolName {...parchmentToolName} iconSrc={iconSrc} />
            </div>
        </div>
    );
}


export { KonohaKit };
