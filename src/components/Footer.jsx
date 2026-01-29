export const Footer = () => {
    return (
        <footer className="rodape">
            <img className="log" src="/img/LogoElite.svg" alt="Logo" width="300" />
            <p className="titulo-dourado">O máximo conforto e discrição para você.</p>
            <div className="footer-div">
                <div className="item">
                    <li><a href="#" className="nav-item">Premium|Elite</a></li>
                    <li><a href="#" className="nav-item">Acompanhantes</a></li>
                    <li><a href="#" className="nav-item">Anuncie</a></li>
                </div>
            </div>
            <span className="titulo-dourado">&copy; 2026 Elites Club. Todos os direitos reservados.</span>
            <div className="redes-div">
                <i className="bi bi-facebook"></i>
                <i className="bi bi-whatsapp"></i>
                <i className="bi bi-instagram"></i>
            </div>
        </footer>
    );
};