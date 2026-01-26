import { useState, useEffect } from 'react';

export const Filters = ({ onFilterChange }) => {
    const [cidade, setCidade] = useState("Localizando...");

    useEffect(() => {
        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition(async (position) => {
                const { latitude, longitude } = position.coords;

                try {
                    // API de Reverse Geocoding para pegar o nome da cidade
                    const response = await fetch(
                        `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=pt`
                    );
                    const data = await response.json();
                    setCidade(data.city || data.principalSubdivision || "Localização desconhecida");
                } catch (error) {
                    setCidade("São Paulo, SP"); // Fallback caso a API falhe
                }
            }, () => {
                setCidade("Permita acessar sua localização");
            });
        }
    }, []);

    return (
        <section className="filtros-container">
            <div className="filtro-wrapper">

                {/* LADO ESQUERDO: LOCALIZAÇÃO */}
                <div className="localizacao-box">
                    <span className="label-filtro">
                        <i className="bi bi-geo-alt-fill"></i> Sua localização:
                    </span>
                    <div className="input-fake">
                        <input type="text" value={cidade} readOnly />
                        <i className="bi bi-info-circle" title="Localização automática via Google/IP"></i>
                    </div>
                </div>

                <div className="divisor-vertical"></div>

                <div className="genero-box">
                    <span className="label-filtro">Gênero:</span>
                    <div className="opcoes-genero">
                        <label>
                            <input
                                type="checkbox"
                                onChange={() => onFilterChange('feminino')}
                            /> Feminino
                        </label>
                        <label>
                            <input
                                type="checkbox"
                                onChange={() => onFilterChange('masculino')}
                            /> Masculino
                        </label>
                        <label>
                            <input
                                type="checkbox"
                                onChange={() => onFilterChange('transgenero')}
                            /> Transgênero
                        </label>
                    </div>
                </div>
            </div>
        </section>
    );
};