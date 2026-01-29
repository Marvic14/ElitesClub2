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
                <h3>{modelo.nome}, {modelo.idade}</h3>
                <p>{modelo.cidade}</p>

                <div className="estrelas">★★★★★</div>

                <button className="btn-perfil">Ver Perfil</button>
            </div>
        </div>
    );
};