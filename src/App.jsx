import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './App.scss';

import { Home } from './pages/Home';
import { AcompanhantesPage } from './pages/AcompanhantesPage';
import { Header } from './components/Header/Header.jsx';
import { Footer } from './components/Footer';
import { AgeVerification } from './components/AgeVerification/AgeVerification';

// 1. A função ScrollToTop deve ficar FORA do componente App
function ScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return null;
}

function App() {
    const [menuAtivo, setMenuAtivo] = useState(false);

    return (
        <Router>
            <ScrollToTop />
            <AgeVerification />
            <div className="web-aplication">
                <div className="site-bg"></div>

                <Header menuAtivo={menuAtivo} setMenuAtivo={setMenuAtivo} />
                <div className="divisor-luxo"></div>

                <Routes>
                    {/* Página Inicial */}
                    <Route path="/" element={<Home />} />

                    {/* Página de Acompanhantes */}
                    <Route path="/acompanhantes" element={<AcompanhantesPage />} />
                </Routes>

                <Footer />
            </div>
        </Router>
    );
}

export default App;