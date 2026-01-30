import { useState } from 'react';
import { Filters } from '../components/Filters';
import { CardModelo } from '../components/CardModelo';
import { modelosData } from '../data/modelos';

export const AcompanhantesPage = () => {
    const [filtrosAtivos, setFiltrosAtivos] = useState(["feminino"]);
    const [cidadeUsuario, setCidadeUsuario] = useState('');
    const [paginaAtual, setPaginaAtual] = useState(1);

    const itensPorPagina = 6;
    const pesosHierarquia = {
        'ELITE': 1, 'VIP': 2, 'ESSENCIAL': 3, 'SIMPLE': 4, 'BASIC': 5
    };

    const handleFilterChange = (tipo, valor) => {
        if (tipo === 'localizacao') {
            setCidadeUsuario(valor);
            setPaginaAtual(1);
            return;
        }

        setFiltrosAtivos((prev) => {
            if (tipo === 'transgenero') {
                return prev.includes('transgenero') ? prev.filter(i => i !== 'transgenero') : [...prev, 'transgenero'];
            }
            if (tipo === 'feminino') return ['feminino', ...prev.filter(i => i === 'transgenero')];
            if (tipo === 'masculino') return ['masculino', ...prev.filter(i => i === 'transgenero')];
            return prev;
        });
        setPaginaAtual(1);
    };

    // --- LÓGICA DE FILTRAGEM ---
    const filtrar = (usarCidade) => {
        return modelosData.filter(modelo => {
            const generoAlvo = filtrosAtivos.includes('masculino') ? 'masculino' : 'feminino';
            const matchBase = modelo.genero === generoAlvo && modelo.trans === filtrosAtivos.includes('transgenero');

            if (usarCidade && cidadeUsuario) {
                const termoBusca = cidadeUsuario.toLowerCase();
                const cidadeModelo = modelo.cidade.toLowerCase();
                return matchBase && (termoBusca.includes(cidadeModelo) || cidadeModelo.includes(termoBusca));
            }
            return matchBase;
        });
    };

    let modelosFiltrados = filtrar(true); // Tenta na cidade
    const encontrouNaCidade = modelosFiltrados.length > 0;

    if (!encontrouNaCidade) {
        modelosFiltrados = filtrar(false); // Opção B: Mostra todas se não achar na cidade
    }

    // Ordenação
    modelosFiltrados.sort((a, b) => (pesosHierarquia[a.categoria?.toUpperCase()] || 99) - (pesosHierarquia[b.categoria?.toUpperCase()] || 99));

    // Paginação
    const totalPaginas = Math.ceil(modelosFiltrados.length / itensPorPagina);
    const modelosExibidos = modelosFiltrados.slice((paginaAtual - 1) * itensPorPagina, paginaAtual * itensPorPagina);

    return (
        <main className="bg-acompanhantes">
            <Filters onFilterChange={handleFilterChange} filtrosAtivos={filtrosAtivos} />

            <div className="container">
                <h1 className="titulo-dourado title">💎 Acompanhantes</h1>
                <div className="divisor-luxo"></div>

                {/* MENSAGEM DE EXPANSÃO (Agora com classes CSS) */}
                {!encontrouNaCidade && cidadeUsuario && (
                    <div className="aviso-expansao">
                        <i className="bi bi-geo-alt"></i>
                        <p>
                            Ainda não temos modelos nessa categoria em <strong>{cidadeUsuario}</strong>.<br/>
                            Estamos expandindo e em breve chegaremos na sua região!
                            <span className="sub-texto">Enquanto isso, confira modelos em destaque que atendem em outras regiões:</span>
                        </p>
                    </div>
                )}
                <div className="grid-modelos">
                    {modelosExibidos.map(modelo => <CardModelo key={modelo.id} modelo={modelo} />)}
                </div>

                {totalPaginas > 1 && (
                    <div className="paginacao">
                        <button disabled={paginaAtual === 1} onClick={() => { setPaginaAtual(p => p - 1); window.scrollTo(0,0); }}>Anterior</button>
                        <span className="info-paginas">Página {paginaAtual} de {totalPaginas}</span>
                        <button disabled={paginaAtual === totalPaginas} onClick={() => { setPaginaAtual(p => p + 1); window.scrollTo(0,0); }}>Próxima</button>
                    </div>
                )}
            </div>
        </main>
    );
};