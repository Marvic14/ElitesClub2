export const CardModelo = ({ modelo }) => {
    return (
        <div className="card-modelo">
            {/* Badge de categoria */}
            <div className="badge-categoria">{modelo.categoria}</div>

            {/* Container da imagem com a URL de teste que você escolheu */}
            <div className="image-placeholder">
                <img
                    src="https://www.forummodel.com.br/wp-content/webp-express/webp-images/uploads/2022/08/modelo-aprovada-plus-size.jpg.webp"
                    alt={modelo.nome}
                    loading="lazy"
                />
            </div>

            <div className="modelo-info">
                <div className="modelo-header">
                    <h3>{modelo.nome}, {modelo.idade} anos</h3>
                    <a
                        href={`https://wa.me/${modelo.whatsapp}?text=${encodeURIComponent("Olá, te encontrei por meio do site ElitesClub e gostaria de mais informações sobre seus serviços.")}`}
                        target="_blank"
                        rel="noreferrer"
                        className="link-whatsapp"
                    >
                        <img src="/img/WhatsApp.png" alt="ícone WhatsApp" />
                    </a>
                </div>

                <p><i className="bi bi-geo-alt-fill"></i> {modelo.cidade}</p>

                <div className="estrelas">★★★★★</div>

                <button className="btn-perfil">Ver Perfil</button>
            </div>
        </div>
    );
};