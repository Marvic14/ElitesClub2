import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import './App.scss';


import { Home } from './pages/Home';
import { AcompanhantesPage } from './pages/AcompanhantesPage';
import { Header } from './components/Header/Header.jsx';
import { Footer } from './components/Footer';


function App() {
    const [menuAtivo, setMenuAtivo] = useState(false);

    return (
        <Router>
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