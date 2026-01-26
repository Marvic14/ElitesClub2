import { useState } from 'react';
import { Filters } from '../components/Filters';
import { CardModelo } from '../components/CardModelo';
import { modelosData } from '../data/modelos';

export const AcompanhantesPage = () => {
    // 1. Estado começa com 'feminino' por padrão
    const [filtrosAtivos, setFiltrosAtivos] = useState(["feminino"]);

    // 2. FUNÇÃO ÚNICA (Lógica de exclusividade Masculino/Feminino)
    const handleFilterChange = (genero) => {
        setFiltrosAtivos((prev) => {
            if (genero === 'feminino') {
                return prev.includes('feminino')
                    ? prev.filter(item => item !== 'feminino')
                    : [...prev.filter(item => item !== 'masculino'), 'feminino'];
            }

            if (genero === 'masculino') {
                return prev.includes('masculino')
                    ? prev.filter(item => item !== 'masculino')
                    : [...prev.filter(item => item !== 'feminino'), 'masculino'];
            }

            if (genero === 'transgenero') {
                return prev.includes('transgenero')
                    ? prev.filter(item => item !== 'transgenero')
                    : [...prev, 'transgenero'];
            }
            return prev;
        });
    };

    // 3. Lógica de Filtragem
    const modelosFiltrados = modelosData.filter(modelo => {
        const querFeminino = filtrosAtivos.includes('feminino');
        const querMasculino = filtrosAtivos.includes('masculino');
        const querTrans = filtrosAtivos.includes('transgenero');

        // Se nada estiver marcado, padrão é Mulher Cis
        if (filtrosAtivos.length === 0) {
            return modelo.genero === 'feminino' && modelo.trans === false;
        }

        const bateGenero = (querFeminino && modelo.genero === 'feminino') ||
            (querMasculino && modelo.genero === 'masculino') ||
            (!querFeminino && !querMasculino);

        const bateTrans = querTrans ? modelo.trans === true : modelo.trans === false;

        return bateGenero && bateTrans;
    });

    return (
        <main className="principal">
            {/* IMPORTANTE: Passar o filtrosAtivos para o componente de Filtro */}
            <Filters onFilterChange={handleFilterChange} filtrosAtivos={filtrosAtivos} />

            <div className="container">
                <h1 className="titulo-dourado title">💎 Acompanhantes</h1>
                <div className="divisor-luxo"></div>

                <div className="grid-modelos">
                    {modelosFiltrados.length > 0 ? (
                        modelosFiltrados.map(modelo => (
                            <CardModelo key={modelo.id} modelo={modelo} />
                        ))
                    ) : (
                        <p style={{color: '#fff', textAlign: 'center', width: '100%', padding: '50px'}}>
                            Nenhuma modelo encontrada para esta categoria.
                        </p>
                    )}
                </div>
            </div>
        </main>
    );
};