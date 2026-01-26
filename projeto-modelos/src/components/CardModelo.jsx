export const CardModelo = ({ modelo }) => {
    return (
        <div className="card-modelo">
            <div className="badge-categoria">{modelo.categoria}</div>
            <div className="image-placeholder">FOTO</div>

            <div className="modelo-info">
                <h3>{modelo.nome}, {modelo.idade}</h3>
                <p>{modelo.cidade}</p>

                {/* CERTIFIQUE-SE DE QUE A CLASSE É EXATAMENTE "estrelas" */}
                <div className="estrelas">★★★★★</div>

                <button className="btn-perfil">Ver Perfil</button>
            </div>
        </div>
    );
};