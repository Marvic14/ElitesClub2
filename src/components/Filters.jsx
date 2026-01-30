import { useState, useEffect } from 'react';

// Adicionei { filtrosAtivos } aqui nas chaves!
export const Filters = ({ onFilterChange, filtrosAtivos }) => {
    const [cidade, setCidade] = useState("Localizando...");

    // ESSA LINHA FALTAVA! Criando o controle do menu mobile
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition(async (position) => {
                    const { latitude, longitude } = position.coords;

                    try {
                        const response = await fetch(
                            `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=pt`
                        );
                        const data = await response.json();

                        // Ajuste: Pegamos o valor uma única vez
                        const cidadeDetectada = data.city || data.principalSubdivision || "São Paulo";

                        setCidade(cidadeDetectada);
                        onFilterChange('localizacao', cidadeDetectada);
                    } catch (error) {
                        // Importante: Se a API falhar, avisamos o pai também!
                        const padrao = "São Paulo";
                        setCidade(padrao);
                        onFilterChange('localizacao', padrao);
                    }
                }, () => {
                    // Se o usuário negar o GPS
                    const padrao = "São Paulo";
                    setCidade(padrao);
                    onFilterChange('localizacao', padrao);
                },
                {
                    enableHighAccuracy: false,
                    timeout: 4000,
                    maximumAge: 3600000
                }
            );
        }
    }, []);


    return (
        <section className={`filtros-container ${isOpen ? 'open' : ''}`}>

            {/* BOTÃO MOBILE */}
            <button className="mobile-filter-trigger" onClick={() => setIsOpen(!isOpen)}>
                <i className={`bi ${isOpen ? 'bi-x-lg' : 'bi-sliders'}`}></i>
                {isOpen ? ' Fechar Filtros' : ' Filtrar Modelos'}
            </button>

            <div className="filtro-wrapper">
                {/* LOCALIZAÇÃO */}
                <div className="localizacao-box">
                    <span className="label-filtro">
                        <i className="bi bi-geo-alt-fill"></i>Local:
                    </span>
                    <div className="input-fake">
                        <input type="text" value={cidade} readOnly />
                    </div>
                </div>

                <div className="divisor-vertical"></div>

                {/* GÊNEROS */}
                <div className="genero-box">
                    <span className="label-filtro">Gênero:</span>
                    <div className="opcoes-genero">
                        <label>
                            <input
                                type="checkbox"
                                checked={filtrosAtivos.includes('feminino')} // ELE OBEDECE AO ESTADO
                                onChange={() => onFilterChange('feminino')}
                            /> Mulher
                        </label>
                        <label>
                            <input
                                type="checkbox"
                                checked={filtrosAtivos.includes('masculino')} // ELE OBEDECE AO ESTADO
                                onChange={() => onFilterChange('masculino')}
                            /> Homem
                        </label>
                        <label>
                            +
                            <input
                                type="checkbox"
                                checked={filtrosAtivos.includes('transgenero')}
                                onChange={() => onFilterChange('transgenero')}
                            /> Trans
                        </label>
                    </div>
                </div>
            </div>
        </section>
    );
};