import { HitaiAte } from '@shared-molecules/hitai-ate';
import { ParchmentName } from '@shared-molecules/parchment-name';

import './style.css';


function KonohaKit({
    name: text = undefined,
    iconSrc = undefined,
    color: bgColor = undefined
}) {
    const parchmentName = {
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
                <ParchmentName {...parchmentName} />
            </div>
        </div>
    );
}


export { KonohaKit };
