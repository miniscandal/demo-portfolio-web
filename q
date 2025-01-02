[1mdiff --git a/doc/code/manga-dialog/index.jsx b/doc/code/manga-dialog/index.jsx[m
[1mdeleted file mode 100644[m
[1mindex 40fe8ca..0000000[m
[1m--- a/doc/code/manga-dialog/index.jsx[m
[1m+++ /dev/null[m
[36m@@ -1,72 +0,0 @@[m
[31m-import { useState, useEffect, useRef } from 'react';[m
[31m-[m
[31m-import { Paragraph } from '@shared-atoms/paragraph';[m
[31m-[m
[31m-import './style.css';[m
[31m-[m
[31m-[m
[31m-function MangaDialog({[m
[31m-    text = 'Manga Dialog',[m
[31m-    size = 'regular',[m
[31m-    animateText = false[m
[31m-}) {[m
[31m-    const [displayedText, setDisplayedText] = useState('');[m
[31m-    const currentIndex = useRef(0);[m
[31m-    const animationFrame = useRef(null);[m
[31m-[m
[31m-    const lastUpdateTime = useRef(null);[m
[31m-[m
[31m-    useEffect(() => {[m
[31m-        setDisplayedText('');[m
[31m-        currentIndex.current = -1;[m
[31m-[m
[31m-        if (!animateText) {[m
[31m-            setDisplayedText(text);[m
[31m-[m
[31m-            return;[m
[31m-        }[m
[31m-[m
[31m-[m
[31m-        const updateText = (timestamp) => {[m
[31m-            if (!lastUpdateTime.current) {[m
[31m-                lastUpdateTime.current = timestamp;[m
[31m-            }[m
[31m-[m
[31m-            const elapsed = timestamp - lastUpdateTime.current;[m
[31m-[m
[31m-            if (elapsed >= 60) {[m
[31m-                lastUpdateTime.current = timestamp;[m
[31m-                currentIndex.current += 1;[m
[31m-                setDisplayedText((prev) => prev + text[currentIndex.current]);[m
[31m-            }[m
[31m-[m
[31m-            if (currentIndex.current < text.length - 1) {[m
[31m-                animationFrame.current = requestAnimationFrame(updateText);[m
[31m-            }[m
[31m-        };[m
[31m-[m
[31m-        animationFrame.current = requestAnimationFrame(updateText);[m
[31m-[m
[31m-[m
[31m-        return () => {[m
[31m-            cancelAnimationFrame(animationFrame.current);[m
[31m-        };[m
[31m-    }, [text, animateText]);[m
[31m-[m
[31m-    const paragraph = {[m
[31m-        text: displayedText,[m
[31m-        color: 'charcoal-grey'[m
[31m-    };[m
[31m-[m
[31m-    return ([m
[31m-        <div className={`manga-dialog ${size}`}>[m
[31m-            <div className='manga-dialog__div'>[m
[31m-                <Paragraph {...paragraph} />[m
[31m-            </div>[m
[31m-            <div>[m
[31m-            </div>[m
[31m-        </div>[m
[31m-    );[m
[31m-}[m
[31m-[m
[31m-export { MangaDialog };[m
[1mdiff --git a/doc/code/manga-dialog/style.css b/doc/code/manga-dialog/style.css[m
[1mdeleted file mode 100644[m
[1mindex c931b46..0000000[m
[1m--- a/doc/code/manga-dialog/style.css[m
[1m+++ /dev/null[m
[36m@@ -1,57 +0,0 @@[m
[31m-.manga-dialog {[m
[31m-    font-family: 'Yoruka';[m
[31m-[m
[31m-    .manga-dialog__div {[m
[31m-        padding: 0.25rem;[m
[31m-        border-radius: 50%;[m
[31m-        background-color: var(--color-dark);[m
[31m-[m
[31m-        > .paragraph {[m
[31m-            display: flex;[m
[31m-            justify-content: center;[m
[31m-            align-items: center;[m
[31m-            border-radius: 50%;[m
[31m-            background-color: var(--color-light);[m
[31m-            padding: 2rem;[m
[31m-            text-align: center;[m
[31m-        }[m
[31m-    }[m
[31m-[m
[31m-    > div {[m
[31m-        &:last-child {[m
[31m-            background-color: lightpink;[m
[31m-            width: 1rem;[m
[31m-            height: 1rem;[m
[31m-            margin: auto;[m
[31m-            position: relative;[m
[31m-[m
[31m-            &::after {[m
[31m-                content: '';[m
[31m-                display: block;[m
[31m-                width: 100%;[m
[31m-                height: 100%;[m
[31m-                position: absolute;[m
[31m-                top: calc(-50% - 0.225rem);[m
[31m-                transform: rotate(45deg);[m
[31m-                background-color: var(--color-light);[m
[31m-                border-bottom: solid 0.25rem var(--color-dark);[m
[31m-                border-right: solid 0.25rem var(--color-dark);[m
[31m-            }[m
[31m-        }[m
[31m-    }[m
[31m-[m
[31m-    &.regular {[m
[31m-        width: 20rem;[m
[31m-        height: 12rem;[m
[31m-[m
[31m-        > div:first-child {[m
[31m-            width: 100%;[m
[31m-            height: 100%;[m
[31m-[m
[31m-            > .paragraph {[m
[31m-                width: 100%;[m
[31m-                height: 100%;[m
[31m-            }[m
[31m-        }[m
[31m-    }[m
[31m-}[m
[1mdiff --git a/src/App.jsx b/src/App.jsx[m
[1mindex 204361b..748901e 100644[m
[1m--- a/src/App.jsx[m
[1m+++ b/src/App.jsx[m
[36m@@ -6,16 +6,17 @@[m [mimport { ProfessionalProfile } from '@feat-professional-profile-templates/index'[m
 import { AboutMe } from '@feat-about-me-templates/index';[m
 [m
 import './App.css';[m
[32m+[m[32mimport { ProfessionalContact } from '@shared-organisms/professional-contact';[m
 [m
[31m-import { CopyEmailClipboard } from '@shared-molecules/copy-email-clipboard';[m
 [m
 function App() {[m
 [m
     return ([m
         <>[m
[31m-            <CopyEmailClipboard />[m
[32m+[m[32m            <ProfessionalContact />[m
             <scroll-container>[m
[31m-                {/* <main>[m
[32m+[m[32m                <PrimaryHeader />[m
[32m+[m[32m                <main>[m
                     <scroll-page>[m
                         <div>[m
                             <WorkExperienceHistory />[m
[36m@@ -37,7 +38,7 @@[m [mfunction App() {[m
                         </div>[m
                     </scroll-page>[m
                 </main>[m
[31m-                <PrimaryFooter /> */}[m
[32m+[m[32m                <PrimaryFooter />[m
             </scroll-container>[m
         </>[m
     );[m
[1mdiff --git a/src/features/about-me/components/organisms/technological-tools/index.jsx b/src/features/about-me/components/organisms/technological-tools/index.jsx[m
[1mindex c30e155..cf9bb25 100644[m
[1m--- a/src/features/about-me/components/organisms/technological-tools/index.jsx[m
[1m+++ b/src/features/about-me/components/organisms/technological-tools/index.jsx[m
[36m@@ -1,5 +1,5 @@[m
 import { Title } from '@shared-atoms/title';[m
[31m-import { ToolInformationHitaiAte } from '@shared-molecules/tool-information-hitai-ate';[m
[32m+[m[32mimport { KonohaKit } from '@shared-molecules/konoha-kit';[m
 import { SkillsImplementedWork } from '@shared-organisms/skills-implemented-work';[m
 [m
 import { en as technologiesToolsData } from '@shared-resources-data/glossaries/technological-tools.json';[m
[36m@@ -16,21 +16,21 @@[m [mfunction TechnologicalTools() {[m
         textTitle: 'Current Specialization',[m
         skills: ['java', 'springBoot', 'mySQL'],[m
         skillsInformation: technologiesToolsData,[m
[31m-        Component: ToolInformationHitaiAte,[m
[32m+[m[32m        Component: KonohaKit,[m
         columns: 0[m
     };[m
     const developmentEnvironmentTools = {[m
         textTitle: 'Development Environment',[m
         skills: ['linux', 'python', 'git'],[m
         skillsInformation: technologiesToolsData,[m
[31m-        Component: ToolInformationHitaiAte,[m
[32m+[m[32m        Component: KonohaKit,[m
         columns: 3[m
     };[m
     const activeInterestLearningTools = {[m
         textTitle: 'Active Learning Interest',[m
         skills: ['javaScript', 'html', 'css', 'angular', 'react', 'typeScript'],[m
         skillsInformation: technologiesToolsData,[m
[31m-        Component: ToolInformationHitaiAte,[m
[32m+[m[32m        Component: KonohaKit,[m
         columns: 3[m
     };[m
 [m
[1mdiff --git a/src/features/primary-footer/components/templates/primary-footer/index.jsx b/src/features/primary-footer/components/templates/primary-footer/index.jsx[m
[1mindex 5a8ae16..97b1dd9 100644[m
[1m--- a/src/features/primary-footer/components/templates/primary-footer/index.jsx[m
[1m+++ b/src/features/primary-footer/components/templates/primary-footer/index.jsx[m
[36m@@ -1,4 +1,4 @@[m
[31m-import { ProfessionalContactProvider } from '@shared-contexts/professional-contact';[m
[32m+[m[32mimport { ProfessionalContactProvider } from '@shared-contexts/contact-methods';[m
 [m
 import { Paragraph } from '@shared-atoms/paragraph';[m
 import { ProfessionalContact } from '@shared-organisms/professional-contact';[m
[1mdiff --git a/src/features/primary-header/components/organisms/header-content/index.jsx b/src/features/primary-header/components/organisms/header-content/index.jsx[m
[1mindex 12c73c3..94c3543 100644[m
[1m--- a/src/features/primary-header/components/organisms/header-content/index.jsx[m
[1m+++ b/src/features/primary-header/components/organisms/header-content/index.jsx[m
[36m@@ -1,7 +1,7 @@[m
 import { ChessboardNav } from '@feat-primary-header-organisms/chessboard-nav';[m
 import { ProfessionalInformation } from '@feat-primary-header-organisms/professional-information';[m
 import { ProfessionalInformationProvider } from '@feat-primary-header-contexts/professional-information';[m
[31m-import { ProfessionalContactProvider } from '@shared-contexts/professional-contact';[m
[32m+[m[32mimport { ProfessionalContactProvider } from '@shared-contexts/contact-methods';[m
 import { CharacterSpeech } from '@shared-molecules/character-speech';[m
 import { ProfessionalContact } from '@shared-organisms/professional-contact';[m
 import { PIXEL_ART_ANIME_MINICODE_ANIMATION_V3 } from '@shared-atoms/pixel-art/variants';[m
[1mdiff --git a/src/index.css b/src/index.css[m
[1mindex e31ff49..5714d09 100644[m
[1m--- a/src/index.css[m
[1m+++ b/src/index.css[m
[36m@@ -40,12 +40,13 @@[m
     --color-misty-gray: #b1b0ae;[m
     --color-charcoal-shadow: #3b3b3b;[m
     --color-soft-moss: #e9e9e9;[m
[32m+[m[32m    --color-violet-dusk: #9856be;[m
 [m
 [m
     --padding-uniform: 1.5rem;[m
     --padding-simple-atom: 0.2rem;[m
[31m-    --padding-atom: 0.3rem;[m
[31m-    --padding-simple-molecule: 0.6rem;[m
[32m+[m[32m    --padding-atom: 0.4rem;[m
[32m+[m[32m    --padding-simple-molecule: 0.5rem;[m
     --padding-molecule: 1rem;[m
     --padding-simple-organism: 1.5rem;[m
     --padding-organism: 4rem;[m
[36m@@ -80,6 +81,11 @@[m
 [m
     --box-shadow-inset: inset 0 0 0.25rem var(--color-cool-sky);[m
 [m
[32m+[m[32m    --box-shadow-offset: 0.25em;[m
[32m+[m[32m    --box-shadow-blur: 0.25em;[m
[32m+[m[32m    --box-shadow-spread: 0.25em;[m
[32m+[m[32m    --box-shadow-color: var(--color-charcoal-grey);[m
[32m+[m
     --animation-duration: 0.3s;[m
     --animation-fade-out: fade-out 3.5s 1;[m
     --animation-blink-character: blink-character 2s infinite;[m
[1mdiff --git a/src/shared/components/molecules/hit-box-button/index.jsx b/src/shared/components/molecules/hit-box-button/index.jsx[m
[1mindex bed1fc9..1c84c3d 100644[m
[1m--- a/src/shared/components/molecules/hit-box-button/index.jsx[m
[1m+++ b/src/shared/components/molecules/hit-box-button/index.jsx[m
[36m@@ -1,7 +1,14 @@[m
 import './style.css';[m
 [m
 [m
[31m-function HitBoxButton({ children, onClickCallback, readingMode = false, dataSet = { index: null } }) {[m
[32m+[m[32mfunction HitBoxButton({[m
[32m+[m[32m    children,[m
[32m+[m[32m    onClickCallback,[m
[32m+[m[32m    readingMode = false,[m
[32m+[m[32m    dataSet = {[m
[32m+[m[32m        index: null[m
[32m+[m[32m    }[m
[32m+[m[32m}) {[m
     const classList = [[m
         readingMode ? 'reading-mode' : ''[m
     ];[m
[1mdiff --git a/src/shared/components/molecules/hit-box-button/style.css b/src/shared/components/molecules/hit-box-button/style.css[m
[1mindex ea3b5b9..89e2c6a 100644[m
[1m--- a/src/shared/components/molecules/hit-box-button/style.css[m
[1m+++ b/src/shared/components/molecules/hit-box-button/style.css[m
[36m@@ -20,14 +20,14 @@[m
 [m
 @keyframes shadow-animation {[m
     0% {[m
[31m-        box-shadow: 0 0 0 0 #ffffff00;[m
[32m+[m[32m        box-shadow: 0 0 0 0 transparent;[m
     }[m
 [m
     50% {[m
[31m-        box-shadow: 0 0 1em 0.2em #9856be;[m
[32m+[m[32m        box-shadow: 0 0 1em 0.2em var(--color-violet-dusk);[m
     }[m
 [m
     100% {[m
[31m-        box-shadow: 0 0 0 0 #ffffff00;[m
[32m+[m[32m        box-shadow: 0 0 0 0 transparent;[m
     }[m
 }[m
[1mdiff --git a/src/shared/components/molecules/hitai-ate/style.css b/src/shared/components/molecules/hitai-ate/style.css[m
[1mindex 17dbcd0..dfd0cdc 100644[m
[1m--- a/src/shared/components/molecules/hitai-ate/style.css[m
[1m+++ b/src/shared/components/molecules/hitai-ate/style.css[m
[36m@@ -8,15 +8,15 @@[m
         left: 50%;[m
         transform: translate(-50%, -50%);[m
 [m
[31m-        padding: 0.4rem;[m
[32m+[m[32m        padding: var(--padding-atom);[m
         background-color: var(--color-misty-gray);[m
         border-radius: var(--border-radius-simple-molecule);[m
[31m-        box-shadow: 0 0 5px 2px var(--color-charcoal-shadow) inset;[m
[32m+[m[32m        box-shadow: 0 0 0.25em 0.15em var(--color-charcoal-shadow) inset;[m
 [m
         > div {[m
[31m-            padding: 0.2rem;[m
[32m+[m[32m            padding: var(--padding-simple-atom);[m
             background-color: var(--color-soft-moss);[m
[31m-            box-shadow: 0 0 5px 2px var(--color-charcoal-shadow);[m
[32m+[m[32m            box-shadow: 0 0 0.25em 0.15em var(--color-charcoal-shadow);[m
             border-radius: var(--border-radius-atom);[m
         }[m
     }[m
[1mdiff --git a/src/shared/components/molecules/hyperlink-icon/index.jsx b/src/shared/components/molecules/hyperlink-icon/index.jsx[m
[1mindex 244e7c4..02b1fcb 100644[m
[1m--- a/src/shared/components/molecules/hyperlink-icon/index.jsx[m
[1m+++ b/src/shared/components/molecules/hyperlink-icon/index.jsx[m
[36m@@ -3,10 +3,12 @@[m [mimport { Icon } from '@shared-atoms/icon';[m
 import './style.css';[m
 [m
 [m
[31m-function HyperlinkIcon({ href, iconSrc }) {[m
[32m+[m[32mfunction HyperlinkIcon({[m
[32m+[m[32m    href,[m
[32m+[m[32m    iconSrc[m
[32m+[m[32m}) {[m
     const icon = {[m
[31m-        src: iconSrc,[m
[31m-        color: 'light'[m
[32m+[m[32m        src: iconSrc[m
     };[m
 [m
     return ([m
[1mdiff --git a/src/shared/components/molecules/hyperlink-icon/style.css b/src/shared/components/molecules/hyperlink-icon/style.css[m
[1mindex d3a1368..a01ea54 100644[m
[1m--- a/src/shared/components/molecules/hyperlink-icon/style.css[m
[1m+++ b/src/shared/components/molecules/hyperlink-icon/style.css[m
[36m@@ -1,7 +1,8 @@[m
 .hyperlink-icon {[m
[32m+[m[32m    width: fit-content;[m
     display: block;[m
     padding: var(--padding-atom);[m
[31m-    border: solid 1px var(--color-light-silver);[m
[32m+[m[32m    border: solid var(--border-regular-width) var(--color-light-silver);[m
     border-radius: var(--border-radius-atom);[m
     cursor: pointer;[m
 [m
[1mdiff --git a/src/shared/components/molecules/icon-button/index.jsx b/src/shared/components/molecules/icon-button/index.jsx[m
[1mindex 198a29c..cfd5f6a 100644[m
[1m--- a/src/shared/components/molecules/icon-button/index.jsx[m
[1m+++ b/src/shared/components/molecules/icon-button/index.jsx[m
[36m@@ -1,15 +1,16 @@[m
 import { IconFontSvg } from '@shared-atoms/icon-font-svg';[m
 [m
[31m-import { Terminal } from '@shared-atoms/icon-font-svg/variants';[m
[31m-[m
 import './style.css';[m
 [m
 [m
 function IconButton({[m
     size = 'regular',[m
[31m-    svg = Terminal,[m
[32m+[m[32m    svg,[m
     handleClick = () => { }[m
 }) {[m
[32m+[m[32m    const classList = [[m
[32m+[m[32m        size[m
[32m+[m[32m    ];[m
     const iconFontSvg = {[m
         svg,[m
         color: 'charcoal-grey',[m
[36m@@ -17,7 +18,7 @@[m [mfunction IconButton({[m
     };[m
 [m
     return ([m
[31m-        <button className={`icon-button ${size}`} onClick={handleClick}>[m
[32m+[m[32m        <button className={`icon-button ${classList.join(' ')}`} onClick={handleClick}>[m
             <IconFontSvg {...iconFontSvg} />[m
         </button>[m
     );[m
[1mdiff --git a/src/shared/components/molecules/icon-button/style.css b/src/shared/components/molecules/icon-button/style.css[m
[1mindex 131b249..5903abb 100644[m
[1m--- a/src/shared/components/molecules/icon-button/style.css[m
[1m+++ b/src/shared/components/molecules/icon-button/style.css[m
[36m@@ -1,12 +1,11 @@[m
 .icon-button {[m
     cursor: pointer;[m
[31m-    background: none;[m
[31m-    border: none;[m
[31m-    border-radius: var(--border-radius-molecule);[m
[32m+[m[32m    background: transparent;[m
     display: flex;[m
     justify-content: center;[m
     align-items: center;[m
[31m-    border: dashed var(--color-charcoal-grey) 1px;[m
[32m+[m[32m    border-radius: var(--border-radius-molecule);[m
[32m+[m[32m    border: dashed var(--color-charcoal-grey) var(--border-regular-width);[m
 [m
     .icon-font-svg {[m
         transition: var(--transition-transform);[m
[36m@@ -18,6 +17,6 @@[m
     }[m
 [m
     &:hover {[m
[31m-        box-shadow: 0 0 0.5rem;[m
[32m+[m[32m        box-shadow: 0 0 0.5em;[m
     }[m
 }[m
[1mdiff --git a/src/shared/components/molecules/interpersonal-competency-information/index.jsx b/src/shared/components/molecules/interpersonal-competency-information/index.jsx[m
[1mindex d161f2f..c5ff7c3 100644[m
[1m--- a/src/shared/components/molecules/interpersonal-competency-information/index.jsx[m
[1m+++ b/src/shared/components/molecules/interpersonal-competency-information/index.jsx[m
[36m@@ -4,7 +4,7 @@[m [mimport './style.css';[m
 [m
 [m
 function InterpersonalCompetencyInformation({[m
[31m-    name: text = 'interpersonal competency'[m
[32m+[m[32m    name: text = 'Interpersonal Competency'[m
 }) {[m
     const paragraph = {[m
         text[m
[1mdiff --git a/src/shared/components/molecules/interpersonal-competency-information/style.css b/src/shared/components/molecules/interpersonal-competency-information/style.css[m
[1mindex 5857606..d62bbe8 100644[m
[1m--- a/src/shared/components/molecules/interpersonal-competency-information/style.css[m
[1m+++ b/src/shared/components/molecules/interpersonal-competency-information/style.css[m
[36m@@ -1,15 +1,13 @@[m
 .interpersonal-competency-information {[m
[31m-    min-width: 10rem;[m
[31m-    border-radius: var(--border-radius-atom);[m
[31m-    background-color: var(--color-heather-mist);[m
[31m-    text-align: center;[m
[32m+[m[32m    width: fit-content;[m
     position: relative;[m
     padding: var(--padding-simple-molecule);[m
[32m+[m[32m    border-radius: var(--border-radius-molecule);[m
[32m+[m[32m    background-color: var(--color-heather-mist);[m
     cursor: pointer;[m
 [m
     > .paragraph {[m
[31m-        padding-left: var(--padding-simple-molecule);[m
[31m-        padding-right: var(--padding-simple-molecule);[m
[32m+[m[32m        padding: 0 var(--padding-simple-molecule);[m
     }[m
 [m
     &:hover {[m
[36m@@ -21,14 +19,9 @@[m
 [m
     &::after {[m
         content: '';[m
[31m-        display: block;[m
         position: absolute;[m
         inset: var(--padding-simple-molecule);[m
[31m-        border: solid 0.1rem var(--color-misty-gray);[m
[31m-        transition:[m
[31m-            top var(--transition-seconds) linear,[m
[31m-            right var(--transition-seconds) linear,[m
[31m-            bottom var(--transition-seconds) linear,[m
[31m-            left var(--transition-seconds) linear;[m
[32m+[m[32m        border: solid var(--border-regular-width) var(--color-misty-gray);[m
[32m+[m[32m        transition: inset var(--transition-seconds) linear;[m
     }[m
 }[m
[1mdiff --git a/src/shared/components/molecules/knowledge-information/index.jsx b/src/shared/components/molecules/knowledge-information/index.jsx[m
[1mindex ff879ee..652f240 100644[m
[1m--- a/src/shared/components/molecules/knowledge-information/index.jsx[m
[1m+++ b/src/shared/components/molecules/knowledge-information/index.jsx[m
[36m@@ -10,6 +10,9 @@[m [mfunction KnowledgeInformation({[m
     name: text = 'Knowledge Information',[m
     color: bgColor = 'lightpink',[m
 }) {[m
[32m+[m[32m    const styles = {[m
[32m+[m[32m        backgroundColor: bgColor[m
[32m+[m[32m    };[m
     const pixelArtBook = {[m
         size: 'small',[m
         character: PIXEL_ART_ITEM_BOOKS[m
[36m@@ -19,11 +22,9 @@[m [mfunction KnowledgeInformation({[m
     };[m
 [m
     return ([m
[31m-        <div className='knowledge-information' style={{ backgroundColor: bgColor }}>[m
[32m+[m[32m        <div className='knowledge-information' style={styles}>[m
             <Paragraph {...paragraph} />[m
[31m-            <div>[m
[31m-                <PixelArt {...pixelArtBook} />[m
[31m-            </div>[m
[32m+[m[32m            <PixelArt {...pixelArtBook} />[m
         </div>[m
     );[m
 }[m
[1mdiff --git a/src/shared/components/molecules/knowledge-information/style.css b/src/shared/components/molecules/knowledge-information/style.css[m
[1mindex 8709c5a..16de084 100644[m
[1m--- a/src/shared/components/molecules/knowledge-information/style.css[m
[1m+++ b/src/shared/components/molecules/knowledge-information/style.css[m
[36m@@ -1,17 +1,8 @@[m
 .knowledge-information {[m
[32m+[m[32m    width: fit-content;[m
     display: flex;[m
     align-items: center;[m
[31m-    justify-content: space-between;[m
[31m-    min-width: 12rem;[m
[31m-    position: relative;[m
[31m-    text-align: center;[m
     padding: var(--padding-simple-molecule);[m
[31m-    border-radius: var(--border-radius-atom);[m
[31m-[m
[31m-    > div {[m
[31m-        position: absolute;[m
[31m-        top: 50%;[m
[31m-        right: 0;[m
[31m-        transform: translateY(-50%);[m
[31m-    }[m
[32m+[m[32m    border-radius: var(--border-radius-molecule);[m
[32m+[m[32m    gap: var(--gap-molecule);[m
 }[m
[1mdiff --git a/src/shared/components/molecules/manga-dialog/index.jsx b/src/shared/components/molecules/manga-dialog/index.jsx[m
[1mindex fec4cce..51d41cc 100644[m
[1m--- a/src/shared/components/molecules/manga-dialog/index.jsx[m
[1m+++ b/src/shared/components/molecules/manga-dialog/index.jsx[m
[36m@@ -13,9 +13,12 @@[m [mfunction MangaDialog({[m
     const [displayedText, setDisplayedText] = useState('');[m
     const currentIndex = useRef(0);[m
     const animationFrame = useRef(null);[m
[31m-[m
     const lastUpdateTime = useRef(null);[m
 [m
[32m+[m[32m    const classList = [[m
[32m+[m[32m        size[m
[32m+[m[32m    ];[m
[32m+[m
     useEffect(() => {[m
         setDisplayedText('');[m
         currentIndex.current = -1;[m
[36m@@ -59,7 +62,7 @@[m [mfunction MangaDialog({[m
     };[m
 [m
     return ([m
[31m-        <div className={`manga-dialog ${size}`}>[m
[32m+[m[32m        <div className={`manga-dialog ${classList.join(' ')}`}>[m
             <div className='manga-dialog__div'>[m
                 <div>[m
                     <Paragraph {...paragraph} />[m
[1mdiff --git a/src/shared/components/molecules/manga-dialog/style.css b/src/shared/components/molecules/manga-dialog/style.css[m
[1mindex abcaf91..515026a 100644[m
[1m--- a/src/shared/components/molecules/manga-dialog/style.css[m
[1m+++ b/src/shared/components/molecules/manga-dialog/style.css[m
[36m@@ -4,7 +4,7 @@[m
     > .manga-dialog__div {[m
         height: 100%;[m
         border-radius: 50%;[m
[31m-        border: solid 0.25rem var(--color-dark);[m
[32m+[m[32m        border: solid var(--border-radius-atom) var(--color-dark);[m
 [m
         > div {[m
             height: 100%;[m
[36m@@ -24,9 +24,9 @@[m
         width: 1.5rem;[m
         height: 1.5rem;[m
         margin: auto;[m
[31m-        transform: translateY(-1rem) rotate(45deg);[m
[31m-        border-right: solid 0.25rem var(--color-dark);[m
[31m-        border-bottom: solid 0.25rem var(--color-dark);[m
[32m+[m[32m        transform: translateY(-1em) rotate(45deg);[m
[32m+[m[32m        border-right: solid var(--border-radius-atom) var(--color-dark);[m
[32m+[m[32m        border-bottom: solid var(--border-radius-atom) var(--color-dark);[m
         background-color: var(--color-light);[m
     }[m
 [m
[1mdiff --git a/src/shared/components/molecules/next-step-button/index.jsx b/src/shared/components/molecules/next-step-button/index.jsx[m
[1mindex 96926a2..09a202d 100644[m
[1m--- a/src/shared/components/molecules/next-step-button/index.jsx[m
[1m+++ b/src/shared/components/molecules/next-step-button/index.jsx[m
[36m@@ -9,6 +9,9 @@[m [mfunction NextStepButton({[m
     text = 'Next Step',[m
     size = 'regular'[m
 }) {[m
[32m+[m[32m    const classList = [[m
[32m+[m[32m        size[m
[32m+[m[32m    ];[m
     const paragraph = {[m
         text,[m
         color: 'light'[m
[36m@@ -20,14 +23,12 @@[m [mfunction NextStepButton({[m
     };[m
 [m
     return ([m
[31m-        <div className={`next-step-button ${size}`}>[m
[31m-            <div>[m
[31m-                <div className='paragraph__div'>[m
[31m-                    <Paragraph {...paragraph} />[m
[31m-                </div>[m
[31m-                <div className='icon-font-svg__div'>[m
[31m-                    <IconFontSvg {...iconFontSvg} />[m
[31m-                </div>[m
[32m+[m[32m        <div className={`next-step-button ${classList.join(' ')}`}>[m
[32m+[m[32m            <div className='next-step-button__div'>[m
[32m+[m[32m                <Paragraph {...paragraph} />[m
[32m+[m[32m            </div>[m
[32m+[m[32m            <div className='next-step-button__div'>[m
[32m+[m[32m                <IconFontSvg {...iconFontSvg} />[m
             </div>[m
         </div>[m
     );[m
[1mdiff --git a/src/shared/components/molecules/next-step-button/style.css b/src/shared/components/molecules/next-step-button/style.css[m
[1mindex 34dc1cc..fcc7fd6 100644[m
[1m--- a/src/shared/components/molecules/next-step-button/style.css[m
[1m+++ b/src/shared/components/molecules/next-step-button/style.css[m
[36m@@ -1,41 +1,27 @@[m
 .next-step-button {[m
[31m-    overflow: hidden;[m
[32m+[m[32m    display: flex;[m
[32m+[m[32m    flex-direction: column;[m
[32m+[m[32m    width: fit-content;[m
[32m+[m[32m    gap: var(--gap-simple-molecule);[m
 [m
[31m-    > div {[m
[31m-        display: flex;[m
[31m-        flex-direction: column;[m
[31m-        align-items: center;[m
[31m-        gap: var(--gap-simple-molecule);[m
[32m+[m[32m    > .next-step-button__div {[m
[32m+[m[32m        align-self: center;[m
 [m
[31m-        > .paragraph__div {[m
[31m-            background-color: var(--color-olive-green);[m
[31m-            border-radius: var(--border-radius-atom);[m
[31m-            padding: var(--padding-simple-atom);[m
[31m-            padding-left: var(--padding-simple-molecule);[m
[31m-            padding-right: var(--padding-simple-molecule);[m
[31m-        }[m
[31m-[m
[31m-        > .icon-font-svg__div {[m
[31m-[m
[31m-            transition: background-color 0.3s ease;[m
[31m-            animation: pulse 1.5s ease-in-out infinite;[m
[32m+[m[32m        &:last-child {[m
[32m+[m[32m            animation: press-button 0.5s infinite alternate linear;[m
         }[m
     }[m
 }[m
 [m
[31m-@keyframes pulse {[m
[31m-    0% {[m
[31m-        transform: scale(1);[m
[31m-        opacity: 0.8;[m
[31m-    }[m
[31m-[m
[31m-    50% {[m
[31m-        transform: scale(1.1);[m
[31m-        opacity: 1;[m
[32m+[m[32m@keyframes press-button {[m
[32m+[m[32m    from {[m
[32m+[m[32m        transform: translateY(calc(var(--gap-simple-molecule) * -1));[m
[32m+[m[32m        filter: opacity(0.6);[m
[32m+[m[32m        opacity: 0.6;[m
     }[m
 [m
[31m-    100% {[m
[31m-        transform: scale(1);[m
[31m-        opacity: 0.8;[m
[32m+[m[32m    to {[m
[32m+[m[32m        transform: translateY(0);[m
[32m+[m[32m        filter: opacity(1);[m
     }[m
 }[m
[1mdiff --git a/src/shared/components/molecules/tool-information-hitai-ate/index.jsx b/src/shared/components/molecules/tool-information-hitai-ate/index.jsx[m
[1mdeleted file mode 100644[m
[1mindex d7174e1..0000000[m
[1m--- a/src/shared/components/molecules/tool-information-hitai-ate/index.jsx[m
[1m+++ /dev/null[m
[36m@@ -1,44 +0,0 @@[m
[31m-import { Paragraph } from '@shared-atoms/paragraph';[m
[31m-import { HitaiAte } from '@shared-molecules/hitai-ate';[m
[31m-import { PixelArt } from '@shared-atoms/pixel-art';[m
[31m-[m
[31m-import { PIXEL_ART_ITEM_PARCHMENT } from '@shared-atoms/pixel-art/variants';[m
[31m-[m
[31m-import './style.css';[m
[31m-[m
[31m-[m
[31m-function ToolInformationHitaiAte({[m
[31m-    name: text = 'Tool',[m
[31m-    iconSrc = undefined,[m
[31m-    color: bgColor = 'lightpink'[m
[31m-}) {[m
[31m-    const pixelArt = {[m
[31m-        character: PIXEL_ART_ITEM_PARCHMENT[m
[31m-    };[m
[31m-    const hitaiAte = {[m
[31m-        src: iconSrc[m
[31m-    };[m
[31m-    const paragraph = {[m
[31m-        text,[m
[31m-        color: '.dark',[m
[31m-        size: 'semi-regular'[m
[31m-    };[m
[31m-[m
[31m-    return ([m
[31m-        <div className='tool-information-hitai-ate'>[m
[31m-            <div>[m
[31m-                <HitaiAte {...hitaiAte} />[m
[31m-            </div>[m
[31m-            <div>[m
[31m-                <PixelArt{...pixelArt} />[m
[31m-                <div className='tool-information-hitai-ate__div' style={{ backgroundColor: bgColor }}>[m
[31m-                    <Paragraph {...paragraph} />[m
[31m-                </div>[m
[31m-            </div>[m
[31m-[m
[31m-        </div>[m
[31m-    );[m
[31m-}[m
[31m-[m
[31m-[m
[31m-export { ToolInformationHitaiAte };[m
[1mdiff --git a/src/shared/components/molecules/tool-information-hitai-ate/style.css b/src/shared/components/molecules/tool-information-hitai-ate/style.css[m
[1mdeleted file mode 100644[m
[1mindex 2f38de5..0000000[m
[1m--- a/src/shared/components/molecules/tool-information-hitai-ate/style.css[m
[1m+++ /dev/null[m
[36m@@ -1,32 +0,0 @@[m
[31m-.tool-information-hitai-ate {[m
[31m-    width: fit-content;[m
[31m-    margin: auto;[m
[31m-[m
[31m-    > div {[m
[31m-        &:first-child {[m
[31m-            width: fit-content;[m
[31m-            margin: auto;[m
[31m-        }[m
[31m-[m
[31m-        &:last-child {[m
[31m-            position: relative;[m
[31m-[m
[31m-            > .tool-information-hitai-ate__div {[m
[31m-                position: absolute;[m
[31m-                top: 50%;[m
[31m-                right: 3.3%;[m
[31m-                transform: translateY(-50%);[m
[31m-                width: 82%;[m
[31m-                border-top: solid var(--color-charcoal-shadow) 0.3em;[m
[31m-                border-bottom: solid var(--color-charcoal-shadow) 0.3em;[m
[31m-                padding: var(--padding-simple-molecule);[m
[31m-                filter: sepia(0.4);[m
[31m-[m
[31m-                > .paragraph {[m
[31m-                    font-family: Yoruka;[m
[31m-                    text-align: center;[m
[31m-                }[m
[31m-            }[m
[31m-        }[m
[31m-    }[m
[31m-}[m
[1mdiff --git a/src/shared/components/molecules/tool-information/index.jsx b/src/shared/components/molecules/tool-information/index.jsx[m
[1mindex 2cd8556..28ae76a 100644[m
[1m--- a/src/shared/components/molecules/tool-information/index.jsx[m
[1m+++ b/src/shared/components/molecules/tool-information/index.jsx[m
[36m@@ -9,6 +9,9 @@[m [mfunction ToolInformation({[m
     iconSrc = undefined,[m
     color: bgColor = 'lightpink'[m
 }) {[m
[32m+[m[32m    const styles = {[m
[32m+[m[32m        backgroundColor: bgColor[m
[32m+[m[32m    };[m
     const icon = {[m
         src: iconSrc,[m
         size: 'small'[m
[36m@@ -19,14 +22,11 @@[m [mfunction ToolInformation({[m
 [m
     return ([m
         <div className='tool-information'>[m
[31m-            <div style={{ backgroundColor: bgColor }}>[m
[32m+[m[32m            <div className='tool-information__div' style={styles}>[m
                 <Paragraph {...paragraph} />[m
             </div>[m
[31m-            <div>[m
[31m-                <Paragraph text={'_'} />[m
[31m-                <div>[m
[31m-                    <Icon {...icon} />[m
[31m-                </div>[m
[32m+[m[32m            <div className='tool-information__div'>[m
[32m+[m[32m                <Icon {...icon} />[m
             </div>[m
         </div>[m
     );[m
[1mdiff --git a/src/shared/components/molecules/tool-information/style.css b/src/shared/components/molecules/tool-information/style.css[m
[1mindex 3f9228c..7c36e7c 100644[m
[1m--- a/src/shared/components/molecules/tool-information/style.css[m
[1m+++ b/src/shared/components/molecules/tool-information/style.css[m
[36m@@ -1,42 +1,31 @@[m
[31m- .tool-information {[m
[31m-     display: flex;[m
[31m-     flex-direction: column-reverse;[m
[31m-     min-width: 8rem;[m
[32m+[m[32m.tool-information {[m
[32m+[m[32m    width: 8rem;[m
[32m+[m[32m    display: flex;[m
[32m+[m[32m    flex-direction: column-reverse;[m
[32m+[m[32m    gap: var(--gap-simple-molecule);[m
 [m
[31m-     > div {[m
[31m-         padding: var(--padding-simple-molecule);[m
[32m+[m[32m    > .tool-information__div {[m
[32m+[m[32m        padding: var(--padding-simple-molecule);[m
[32m+[m[32m        border-radius: var(--border-radius-atom);[m
[32m+[m[32m        background-color: var(--color-light-silver);[m
 [m
[31m-         &:first-child {[m
[31m-             text-align: center;[m
[31m-             border-radius: var(--border-radius-atom);[m
[32m+[m[32m        &:first-child {[m
[32m+[m[32m            text-align: center;[m
 [m
[31m-             &:hover {[m
[31m-                 cursor: pointer;[m
[32m+[m[32m            &:hover {[m
[32m+[m[32m                cursor: pointer;[m
 [m
[31m-                 + div {[m
[31m-                     > div {[m
[31m-                         box-shadow: 0em 0.5em 0.5em var(--color-charcoal-grey);[m
[31m-                     }[m
[31m-                 }[m
[31m-             }[m
[31m-         }[m
[32m+[m[32m                + .tool-information__div {[m
[32m+[m[32m                    transform: translateX(0.25em);[m
[32m+[m[32m                    box-shadow:[m
[32m+[m[32m                        calc(var(--box-shadow-offset) * -1) var(--box-shadow-offset) var(--box-shadow-blur) var(--box-shadow-spread) var(--box-shadow-color);[m
[32m+[m[32m                }[m
[32m+[m[32m            }[m
[32m+[m[32m        }[m
 [m
[31m-         &:last-child {[m
[31m-             position: relative;[m
[31m-[m
[31m-             > div {[m
[31m-                 position: absolute;[m
[31m-                 top: 0;[m
[31m-                 left: 0;[m
[31m-                 padding: var(--padding-atom);[m
[31m-                 background-color: var(--color-light-silver);[m
[31m-                 border-radius: var(--border-radius-atom);[m
[31m-                 transition: var(--transition-transform), var(--transition-box-shadow);[m
[31m-[m
[31m-                 &:hover {[m
[31m-                     box-shadow: 0em 0.5em 0.5em var(--color-charcoal-grey);[m
[31m-                 }[m
[31m-             }[m
[31m-         }[m
[31m-     }[m
[31m- }[m
[32m+[m[32m        &:last-child {[m
[32m+[m[32m            width: fit-content;[m
[32m+[m[32m            transition: var(--transition-transform), var(--transition-box-shadow);[m
[32m+[m[32m        }[m
[32m+[m[32m    }[m
[32m+[m[32m}[m
[1mdiff --git a/src/shared/components/organisms/professional-contact/index.jsx b/src/shared/components/organisms/professional-contact/index.jsx[m
[1mindex b57d590..eb3b797 100644[m
[1m--- a/src/shared/components/organisms/professional-contact/index.jsx[m
[1m+++ b/src/shared/components/organisms/professional-contact/index.jsx[m
[36m@@ -1,6 +1,6 @@[m
 import { useContext } from 'react';[m
 [m
[31m-import { ProfessionalContactContext } from '@shared-contexts/professional-contact';[m
[32m+[m[32mimport { ProfessionalContactContext } from '@shared-contexts/contact-methods';[m
 [m
 import { SocialNetworks } from '@shared-molecules/social-networks';[m
 import { CopyEmailClipboard } from '@shared-molecules/copy-email-clipboard';[m
[36m@@ -14,6 +14,9 @@[m [mimport './style.css';[m
 function ProfessionalContact({[m
     reverse = false[m
 }) {[m
[32m+[m[32m    const classList = [[m
[32m+[m[32m        reverse ? 'reverse' : ''[m
[32m+[m[32m    ];[m
     const { email, emailFormat, github, linkedin } = useContext(ProfessionalContactContext);[m
 [m
     const socialNetworks = {[m
[36m@@ -30,7 +33,7 @@[m [mfunction ProfessionalContact({[m
 [m
 [m
     return ([m
[31m-        <aside className={`professional-contact ${reverse ? 'reverse' : ''}`}>[m
[32m+[m[32m        <aside className={`professional-contact ${classList.join(' ')}`}>[m
             <div className='professional-contact__div--social-network'>[m
                 <SocialNetworks {...socialNetworks} />[m
                 <HyperlinkIcon {...hyperlinkIcon} />[m
[1mdiff --git a/src/shared/contexts/professional-contact/index.jsx b/src/shared/contexts/professional-contact/index.jsx[m
[1mdeleted file mode 100644[m
[1mindex 6d87684..0000000[m
[1m--- a/src/shared/contexts/professional-contact/index.jsx[m
[1m+++ /dev/null[m
[36m@@ -1,28 +0,0 @@[m
[31m-import { createContext } from 'react';[m
[31m-[m
[31m-import { format } from '@shared-resources-contact/mailto-format.json';[m
[31m-import { github, linkedin } from '@shared-resources-contact/social-networks.json';[m
[31m-[m
[31m-const ProfessionalContactContext = createContext(null);[m
[31m-[m
[31m-const Provider = {[m
[31m-    github,[m
[31m-    linkedin,[m
[31m-    email: 'oscar01dev@gmail.com',[m
[31m-    emailFormat: format[m
[31m-};[m
[31m-[m
[31m-[m
[31m-function ProfessionalContactProvider({ children }) {[m
[31m-[m
[31m-    return ([m
[31m-        <ProfessionalContactContext.Provider value={Provider}>[m
[31m-            {children}[m
[31m-        </ProfessionalContactContext.Provider>[m
[31m-    );[m
[31m-}[m
[31m-[m
[31m-export {[m
[31m-    ProfessionalContactContext,[m
[31m-    ProfessionalContactProvider[m
[31m-};[m
