import { useState, useEffect } from 'react';
import { Filters } from '../components/Filters';
import { CardModelo } from '../components/CardModelo';
import { modelosData } from '../data/modelos';

export const AcompanhantesPage = () => {
    // 1. O segredo: Começamos com Feminino para bater com o que o usuário vê ao abrir
    const [filtrosAtivos, setFiltrosAtivos] = useState(["feminino"]);
    const [paginaAtual, setPaginaAtual] = useState(1);
    const itensPorPagina = 6;
    const pesosHierarquia = {
        'ELITE': 1,
        'VIP': 2,
        'ESSENCIAL': 3,
        'SIMPLE': 4,
        'BASIC': 5 
    };
    // Reset de página sempre que filtrar
    useEffect(() => {
        setPaginaAtual(1);
    }, [filtrosAtivos]);

    const handleFilterChange = (tipo) => {
        setFiltrosAtivos((prev) => {
            if (tipo === 'transgenero') {
                return prev.includes('transgenero')
                    ? prev.filter(i => i !== 'transgenero')
                    : [...prev, 'transgenero'];
            }

            // Se clicar em Masculino, remove Feminino do array. Se clicar em Feminino, remove Masculino.
            if (tipo === 'feminino') {
                return ['feminino', ...prev.filter(i => i === 'transgenero')];
            }
            if (tipo === 'masculino') {
                return ['masculino', ...prev.filter(i => i === 'transgenero')];
            }
            return prev;
        });
    };

// ... no return, passe o estado filtrosAtivos para o componente Filters:
    <Filters onFilterChange={handleFilterChange} filtrosAtivos={filtrosAtivos} />

    // --- 2. FILTRAGEM DE COMBINAÇÃO EXATA ---
    const modelosFiltradosTotal = modelosData.filter(modelo => {
        const querMasculino = filtrosAtivos.includes('masculino');
        const querTrans = filtrosAtivos.includes('transgenero');
        const generoAlvo = querMasculino ? 'masculino' : 'feminino';
        return modelo.genero === generoAlvo && modelo.trans === querTrans;
    }).sort((a, b) => {
        // 2. Normalização dos dados (Remove espaços e ignora maiúsculas/minúsculas)
        const catA = String(a.categoria || '').trim().toUpperCase();
        const catB = String(b.categoria || '').trim().toUpperCase();

        const pesoA = pesosHierarquia[catA] || 99;
        const pesoB = pesosHierarquia[catB] || 99;

        // 3. A Comparação: Quem tem o menor peso (1) sobe para o topo
        return pesoA - pesoB;
    });
    // --- 3. LÓGICA DE PAGINAÇÃO ---
    const totalPaginas = Math.ceil(modelosFiltradosTotal.length / itensPorPagina);
    const indiceUltimoItem = paginaAtual * itensPorPagina;
    const indicePrimeiroItem = indiceUltimoItem - itensPorPagina;
    const modelosExibidos = modelosFiltradosTotal.slice(indicePrimeiroItem, indiceUltimoItem);

    return (
        <main className="bg-acompanhantes">
            {/* Passamos apenas a função, já que seu Filter do Github não usa a prop filtrosAtivos */}
            <Filters onFilterChange={handleFilterChange} filtrosAtivos={filtrosAtivos} />

            <div className="container">
                <h1 className="titulo-dourado title">💎 Acompanhantes</h1>
                <div className="divisor-luxo"></div>

                <div className="grid-modelos">
                    {modelosExibidos.length > 0 ? (
                        modelosExibidos.map(modelo => (
                            <CardModelo key={modelo.id} modelo={modelo} />
                        ))
                    ) : (
                        <p style={{color: '#fff', textAlign: 'center', width: '100%', padding: '50px'}}>
                            Nenhuma modelo encontrada para esta categoria.
                        </p>
                    )}
                </div>

                {totalPaginas > 1 && (
                    <div className="paginacao">
                        <button
                            disabled={paginaAtual === 1}
                            onClick={() => { setPaginaAtual(prev => prev - 1); window.scrollTo(0,0); }}
                        >
                            Anterior
                        </button>
                        <span className="info-paginas">Página {paginaAtual} de {totalPaginas}</span>
                        <button
                            disabled={paginaAtual === totalPaginas}
                            onClick={() => { setPaginaAtual(prev => prev + 1); window.scrollTo(0,0); }}
                        >
                            Próxima
                        </button>
                    </div>
                )}
            </div>
        </main>
    );
};