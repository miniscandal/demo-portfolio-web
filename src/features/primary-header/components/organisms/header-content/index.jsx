import { ProfessionalInformationProvider } from '@feat-primary-header-contexts/professional-information';
import { ProfessionalContactProvider } from '@shared-contexts/professional-contact';

import { ProfessionalInformation } from '@feat-primary-header-molecules/professional-information';
import { ChessboardNav } from '@feat-primary-header-organisms/chessboard-nav';

import { CharacterSpeech } from '@shared-molecules/character-speech';
import { ProfessionalContact } from '@shared-organisms/professional-contact';

import { PIXEL_ART_ANIME_MINICODE_ANIMATION_V1 } from '@shared-atoms/pixel-art/variants';

import './style.css';


function HeaderContent() {
    const characterSpeech = {
        texts: [
            '(ﾉ◕ヮ◕)ﾉ*:･ﾟ✧\n¡Hola, Mundo!\n🌍✨',
            '(＾▽＾)\n¡Bienvenido a mi portafolio web!\n💻🎨',
            '(￣▽￣)ノ\n¡Somos uno, un solo código que hace crecer este repositorio!\n🤝📂',
            '(⌒ω⌒)\n¡No code, no life!\n🖥️❤️',
            '(￣ω￣)\nNo software, no life.\n💾✨',
            '(♡°▽°♡)\n¡Corazón coreano!\n💖🇰🇷',
            '(´･ᴗ･ )\n¿Cuál es el sentido de la vida?\n🤔🌌',
            '(〜￣▽￣)〜\nBailo, pero solo en el simulador Pump It Up.\n🕺🎶',
            '(≧◡≦)\nNo anime, no life.\n🎥✨',
            '(☆ω☆)\n¡Hora de aventura!\n🕒🚀',
            '(⌒ω⌒)ﾉ\n¡Hora de codear!\n💻🕒',
            '(＾▽＾)\nLa música coreana y japonesa me encanta.\n🎵🇯🇵🇰🇷',
            '(✧ω✧)\nNightcore para codear, es top.\n🎧✨',
            '(￣︿￣)\n¡Al rincón a reflexionar sobre tu vida!\n🪞🤨',
            '(ง •̀_•́)ง\n¿Una reta de KOF o qué?\n🎮🔥',
            '(¬‿¬)\nThe King of Fighters (KOF VideoGame).\n🕹️👊',
            '(⌐■_■)\n¡Vamos a programar!\n🖱️👨‍💻',
            '(´• ω •`)\n¡La música me inspira!\n🎼✨',
            '(☆▽☆)\n¡Explorando nuevas ideas!\n💡🌟',
            '(＾ω＾)\nLeche con chocolate, mi gasolina.\n🥛🍫',
            '(＾▽＾)\n¡Siempre aprendiendo algo nuevo!\n📚💡',
            '(〜￣▽￣)〜\nLa música electrónica es lo mejor.\n🎧🎵',
            '(￣︿￣)\nAquí no se aceptan lloros.\n🚫😢',
            '(≧◡≦)\nMi anime favorito es *Orange*.\n🍊📺',
            '(￣人￣)\n¡Dame chamba, porfa!\n🛠️🙏',
            '(￣ω￣)\n¡Pensamiento crítico y lógico!\n🧠💡',
            '(´｡• ᵕ •｡)\nLa empatía es clave para todo.\n🤝💞',
            '(￣▽￣)\nMetacognición para aprender mejor.\n🌀📖',
            '(＾▽＾)\nLa colaboración y comunicación asertiva son fundamentales.\n🗨️🤝',
            '(￣ω￣)\nLa reflexión es parte de mi esencia.\n🌿🪞',
            '(⌒ω⌒)\nIngeniería en Sistemas Computacionales.\n🖥️⚙️',
            '(≧ω≦)\nSistemas embebidos, la fusión perfecta.\n🤖💾',
            '(￣▽￣)\nHardware y software: equipo ganador.\n🛠️🖥️',
            '(￣ω￣)\nCódigo binario: mi idioma secundario.\n🔢💻',
            '(¬‿¬)\n¿Te hablaron de los 2000? Pues tráete las arcades de vuelta.\n🕹️🕛',
            '(＾▽＾)\nSobre ruedas (Serie Soy Luna)\n🚲🎶',
            '(☆ω☆)\nSi lo sueñas claro (Serie Soy Luna)\n🌟💭',
            '(＾▽＾)\nSobre ruedas (Serie Soy Luna)\n🚲🎶',
            '(￣▽￣)\nAlzo mi bandera (Serie Soy Luna)\n🚩🎵',
            '(≧◡≦)\nModo amar (Serie Soy Luna)\n❤️🎤',
            '(☆ω☆)\nBand Main, Passcode, Scandal, Jrock\n🎸🎤',
            '(＾▽＾)\nTwice, Fifty Fifty, BlackPink = Kpop\n🎶💃'
        ],
        character: PIXEL_ART_ANIME_MINICODE_ANIMATION_V1
    };


    return (
        <div className='header-content'>
            <section className='header-content__section'>
                <ProfessionalInformationProvider>
                    <ProfessionalInformation />
                </ProfessionalInformationProvider>
                <ProfessionalContactProvider>
                    <ProfessionalContact />
                </ProfessionalContactProvider>
                <div className='header-content__section--div'>
                    <CharacterSpeech {...characterSpeech} />
                </div>
            </section>
            <nav>
                <ChessboardNav />
            </nav>
        </div>
    );
}

export { HeaderContent };
