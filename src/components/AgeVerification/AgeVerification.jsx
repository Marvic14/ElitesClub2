import { useState, useEffect } from 'react';
import './AgeVerification.scss';

export const AgeVerification = () => {
    const [visivel, setVisivel] = useState(false);

    useEffect(() => {
        const verificado = localStorage.getItem('maiorDe18');
        if (!verificado) {
            setVisivel(true);
        }
    }, []);

    const confirmarIdade = () => {
        localStorage.setItem('maiorDe18', 'true');
        setVisivel(false);
    };

    if (!visivel) return null;

    return (
        <div className="modal-idade-overlay">
            <div className="modal-idade-content">
                <img src="/img/LogoElite.svg" alt="Elites Club" className="modal-logo" />
                <h2>AVISO DE CONTEÚDO ADULTO</h2>
                <p>Este site contém conteúdo restrito para menores de 18 anos. Ao continuar, você confirma que possui a idade legal para acessar este material.</p>

                <div className="modal-buttons">
                    <button onClick={confirmarIdade} className="btn-confirmar">
                        Sou maior de 18 anos - Entrar
                    </button>
                    <a href="https://www.google.com" className="btn-sair">
                        Sair
                    </a>
                </div>
            </div>
        </div>
    );
};