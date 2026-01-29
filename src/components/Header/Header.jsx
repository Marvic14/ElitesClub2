import { Link } from 'react-router-dom';

export const Header = ({ menuAtivo, setMenuAtivo }) => {
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
                ></i>
                <nav className="menu">
                    <ul>
                        <li><Link to="/" className="nav-item">Início</Link></li>
                        <li><a href="#" className="nav-item">Contatos</a></li>
                        <li><Link to="/acompanhantes" className="nav-item">Acompanhantes</Link></li>
                        <li><a href="#" className="nav-item">Anuncie</a></li>
                        <li><a href="#" className="nav-item">Premium / Elite</a></li>
                        <li><a href="#" className="nav-item">Login</a></li>
                    </ul>
                </nav>
            </header>

            {/* O Aside agora mora aqui dentro! */}
            <aside className={`mobile-menu ${menuAtivo ? 'active' : ''}`}>
                <ul>
                    <li><a href="#" className="nav-item active">Início</a></li>
                    <li><a href="#" className="nav-item">Acompanhantes</a></li>
                    <li><a href="#" className="nav-item">Anuncie</a></li>
                    <li><a href="#" className="nav-item">Premium / Elite</a></li>
                    <li><a href="#" className="nav-item">Login</a></li>
                </ul>
            </aside>
        </>
    );
};