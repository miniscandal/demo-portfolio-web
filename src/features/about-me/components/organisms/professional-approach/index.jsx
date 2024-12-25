import { Title } from '@shared-atoms/title';
import { PixelArt } from '@shared-molecules/pixel-art';
import { Paragraph } from '@shared-atoms/paragraph';

import './style.css';


function ProfessionalApproach() {
    const title = {
        text: 'My Professional Approach',
        type: 'h3'
    };
    const paragraphOne = {
        text: `Dedicar tiempo significativo a mi aprendizaje profesional y desarrollo personal con el objetivo final de alcanzar el puesto de ingeniero principal de software.`
    };
    const paragraphTwo = {
        text: `Deseo ser una fuente de inspiración y un mentor para el equipo de ingenieros en formación. Creo que al hacer esto, no solo avanzaré en mi carrera profesional sino que también enriqueceré aspectos importantes de mi vida.`
    };


    return (
        <section className='professional-approach'>
            <Title {...title} />
            <div className='professional-approach__div'>
                <PixelArt />
                <div>
                    <Paragraph {...paragraphOne} />
                    <Paragraph {...paragraphTwo} />
                </div>
            </div>
        </section>
    );
}

export { ProfessionalApproach };
