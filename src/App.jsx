import { PrimaryHeader } from '@feat-primary-header-templates/primary-header';
import { PrimaryFooter } from '@feat-primary-footer-pages/index';

import './App.css';


function App() {

    return (
        <>
            <scroll-container>
                <PrimaryHeader />
                <main>
                </main>
                <PrimaryFooter />
            </scroll-container>
        </>
    );
}

export default App;
