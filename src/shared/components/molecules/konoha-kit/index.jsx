import { ParchmentToolName } from '@shared-molecules/parchment-tool-name';

import { HitaiAte } from '@shared-molecules/hitai-ate';

import './style.css';


function KonohaKit({
    name = undefined,
    iconSrc = undefined,
    color: bgColor = undefined
}) {

    return (
        <div className='konoha-kit'>
            <div className='konoha-kit__div--hitai-ate'>
                <HitaiAte src={iconSrc} currentColor={bgColor} />
            </div>
            <div className='konoha-kit__div--desktop'>
                <ParchmentToolName name={name} bgColor={bgColor} />
            </div>
            <div className='konoha-kit__div--mobile'>
                <ParchmentToolName name={name} bgColor={bgColor} iconSrc={iconSrc} />
            </div>
        </div>
    );
}


export { KonohaKit };
