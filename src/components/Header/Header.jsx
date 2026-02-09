import { Link, useLocation } from 'react-router-dom';
import { useEffect } from 'react';

export const Header = ({
                           menuAtivo = false,
                           setMenuAtivo = () => {}
                       }) => {
    const location = useLocation();

    useEffect(() => {
        setMenuAtivo(false);
    }, [location]);

    return (
        <>
            <header className="cabecalho">
                <div className="image-container logoMarca">
                    <img className="logo" src="/img/LogoElite.svg" alt="Elite Club" />
                </div>

                <i
                    className={`bi ${menuAtivo ? 'bi-x-lg' : 'bi-list'}`}
                    id="mobile-icon"
                    onClick={() => setMenuAtivo(!menuAtivo)}
                />

                <nav className="menu">
                    <ul>
                        <li><Link to="/" className="nav-item">Início</Link></li>
                        <li><Link to="/acompanhantes" className="nav-item">Acompanhantes</Link></li>
                        <li><a href="#" className="nav-item">Anuncie</a></li>
                        <li><a href="#" className="nav-item">Premium / Elite</a></li>
                        <li><Link to="/login" className="nav-item">Login</Link></li>
                    </ul>
                </nav>
            </header>

            <aside className={`mobile-menu ${menuAtivo ? 'active' : ''}`}>
                <ul>
                    <li><Link to="/" className="nav-item">Início</Link></li>
                    <li><Link to="/acompanhantes" className="nav-item">Acompanhantes</Link></li>
                    <li><a href="#" className="nav-item">Anuncie</a></li>
                    <li><a href="#" className="nav-item">Premium / Elite</a></li>
                    <li><Link to="/login" className="nav-item">Login</Link></li>
                </ul>
            </aside>
        </>
    );
};
