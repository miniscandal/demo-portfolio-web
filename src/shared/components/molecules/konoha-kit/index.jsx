import { HitaiAte } from '@shared-molecules/hitai-ate';
import { ParchmentToolName } from '@shared-molecules/parchment-tool-name';

import './style.css';


function KonohaKit({
    name: text = undefined,
    iconSrc = undefined,
    color: bgColor = undefined
}) {
    const parchmentToolName = {
        text,
        bgColor
    };
    const hitaiAte = {
        src: iconSrc
    };

    return (
        <div className='konoha-kit'>
            <div className='konoha-kit__div'>
                <HitaiAte {...hitaiAte} />
            </div>
            <div className='konoha-kit__div'>
                <ParchmentToolName {...parchmentToolName} />
            </div>
        </div>
    );
}


export { KonohaKit };
