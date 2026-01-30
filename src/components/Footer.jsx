export const Footer = () => {
    return (
        <footer className="footer-premium">
            <div className="footer-container">
                {/* COLUNA 1: Branding */}
                <div className="footer-column branding">
                    <img src="/img/LogoElite.svg" alt="Elites Club Logo" className="footer-logo" />
                    <p>O máximo conforto e discrição para você. Experiências extraordinárias em um ambiente exclusivo.</p>
                    <div className="footer-socials">
                        <i className="bi bi-instagram"></i>
                        <i className="bi bi-facebook"></i>
                        <i className="bi bi-twitter-x"></i>
                    </div>
                </div>

                {/* COLUNA 2: Navegação (Visual) */}
                <div className="footer-column">
                    <h3>Navegação</h3>
                    <ul>
                        <li>Premium | Elite</li>
                        <li>Acompanhantes</li>
                        <li>Anuncie Conosco</li>
                        <li>Sobre Nós</li>
                    </ul>
                </div>

                {/* COLUNA 3: Segurança & Pagamento (O "Pulo do Gato" Profissional) */}
                <div className="footer-column">
                    <h3>Segurança</h3>
                    <div className="trust-icons">
                        <img src="/img/18-plus-vetorizado.svg" alt="Selo 18+" style={{width: '40px'}} />
                        <span>Privacidade 100% Garantida</span>
                    </div>
                    <h3 className="mt-20">Pagamento Facilitado</h3>
                    <div className="payment-methods">
                        <i className="bi bi-credit-card"></i>
                        <i className="bi bi-pix"></i>
                        <span>PIX / Cartão</span>
                    </div>
                </div>

            </div>

            <div className="footer-bottom">
                <p>&copy; 2026 Elites Club. Todos os direitos reservados. Proibido para menores de 18 anos.</p>
            </div>
        </footer>
    );
};