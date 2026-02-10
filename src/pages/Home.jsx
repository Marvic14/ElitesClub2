import {Link} from "react-router-dom";

export const Home = () => {

    return(
        <>
            <main className="principal">
                <section className="banner">
                    <div className="container-title">
                        <h1 className="title">Aqui você encontra diversas acompanhantes <br/>de forma rápida e
                            totalmente segura.</h1>
                    </div>
                    <picture>
                        <source srcSet="/img/Mobile-mulherFogo-Background.png" media="(max-width: 768px)"/>
                        <img className="banner-img" src="/img/MulherFogo-Background.png" alt="Banner"/>
                    </picture>
                </section>

                <div className="container">
                    <h1 className="titulo-dourado title">💎 Levamos a sua segurança e privacidade a sério</h1>
                    <div className="divisor-luxo"></div>
                </div>

                {/* --- SEÇÃO SEGURANÇA --- */}
                <section className="segurança">
                    <div className="container-img">
                        <div className="div-image">
                            <img src="/img/Security-table.svg" alt="Segurança"/>
                        </div>
                        <div className="div-image">
                            <img src="/img/CartãoPremium.svg" alt="Premium"/>
                        </div>
                    </div>
                </section>

                <section className="selecao">
                    <div className="container">
                        <h1 className="titulo-dourado title">💎 Processo Seletivo Rigoroso</h1>
                        <div className="divisor-luxo"></div>
                    </div>
                    <div className="container-img">
                        <div className="div-image">
                            <img src="/img/Envelope.svg" alt="Envelope"/>
                        </div>
                        <div className="div-image">
                            <img src="/img/Seletive-table.svg" alt="Seletiva"/>
                        </div>
                    </div>
                    <div className="container">
                        <h1 className="titulo-dourado">Preparado para acessar <br/>um ambiente exclusivo?</h1>
                        <div className="div-button">
                            <Link to="/acompanhantes" className="botao-dourado" style={{ textDecoration: 'none', display: 'inline-block' }}>
                                Conheça as modelos
                            </Link>
                        </div>
                    </div>
                </section>

                {/* --- SEÇÃO DE CARDS (VIVENCIE O EXTRAORDINÁRIO) --- */}
                <section className="card-section">
                    <div className="container">
                        <h1 className="titulo-dourado title">💎 Conquiste já seu objetivo</h1>
                    </div>
                    <div className="container-img">
                        <div className="div-image">
                            <img src="/img/woman1.svg" alt="Modelo 1"/>
                            <div className="div-botao">
                                <h1>Vivencie o<br/> extraordinário</h1>
                                <Link to="/acompanhantes" className="botao-dourado" style={{ textDecoration: 'none', display: 'inline-block' }}>
                                    Encontre Modelos
                                </Link>
                            </div>
                        </div>
                        <div className="div-image">
                            <img src="/img/woman2.svg" alt="Modelo 2"/>
                            <div className="div-botao">
                                <h1>Sua carreira<br/>no topo!</h1>
                                <Link to="/cadastro" className="botao-dourado" style={{ textDecoration: 'none'}}>Torne-se modelo</Link>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="contatos">
                    <div className="container-contatos">
                        <picture>
                            <source srcSet="./img/mobile-contatos-bg.png" media="(max-width: 768px)"/>
                            <img src="./img/background-contatos.svg" alt="Atendimento Exclusivo"
                                 className="img-suporte"/>
                        </picture>
                    </div>
                    <div className="whatsapp">
                        <p>fale com nossa equipe agora <i className="bi bi-headset"></i></p>
                        <img src="./img/WhatsApp.png" alt=""/>
                    </div>
                </section>

            </main>
        </>
    );
}