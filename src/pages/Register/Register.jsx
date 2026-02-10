import React from 'react';
import { Link } from 'react-router-dom';
import './Register.scss';

export default function Register() {
    return (
        <div className="register-page">
            <div className="register-wrapper">
                <div className="register-content">
                    <div className="logo-title-subtitle">
                        <div className="logo-area">
                            <span style={{ fontSize: "45px" }}>🍒</span>
                            <span style={{ fontSize: "25px", marginBottom: "50px" }}>Elites Club</span>
                        </div>

                        <h1>Crie sua conta</h1>
                        <p className="subtitle">Preencha os dados para acessar o ambiente exclusivo.</p>
                    </div>
                    <form className="register-form">
                        <div className="input-group">
                            <label>Nome Completo</label>
                            <input type="text" placeholder="Nome Completo" />

                        </div>
                        <div className="input-group">
                            <label>Nome De Guerra</label>
                            <input type="text" placeholder="Como seus clientes te conhecerão?" />

                        </div>

                        <div className="input-row">
                            <div className="input-group">
                                <label>Gênero</label>
                                <select className="custom-select">
                                    <option value="">Selecione</option>
                                    <option value="masculino">Homem</option>
                                    <option value="feminino">Mulher</option>
                                </select>
                            </div>
                            <div className="input-group">
                                <label>Transgênero</label>
                                <select className="custom-select">
                                    <option value="">Selecione</option>
                                    <option value="true">Sim</option>
                                    <option value="false">Não</option>
                                </select>
                            </div>
                            <div className="input-group">
                                <label>Idade</label>
                                <input type="text" placeholder="Sua idade"/>
                            </div>
                        </div>

                        <div className="input-row">
                            <div className="input-group">
                                <label>Número (privado/recuperação)</label>
                                <input type="text" placeholder="+55 11 00000-0000" />
                            </div>
                            <div className="input-group">
                                <label>Número comercial</label>
                                <input type="text" placeholder="+55 11 00000-0000" />
                            </div>
                        </div>

                        <div className="input-row">
                            <div className="input-group">
                                <label>Estado</label>
                                <input type="text" placeholder="UF" />
                            </div>
                            <div className="input-group">
                                <label>Cidade</label>
                                <input type="text" placeholder="Sua cidade" />
                            </div>
                        </div>

                        <div className="input-group">
                            <label>E-mail</label>
                            <input type="email" placeholder="seu@email.com" />
                        </div>

                        <div className="input-row">
                            <div className="input-group">
                                <label>Senha</label>
                                <input type="password" placeholder="********" />
                            </div>
                            <div className="input-group">
                                <label>Confirmar Senha</label>
                                <input type="password" placeholder="********" />
                            </div>
                        </div>

                        <button type="submit" className="btn-register">Finalizar Cadastro</button>
                    </form>

                    <div className="login-link">
                        Já tem conta? <a href="/login">Entrar agora</a>
                    </div>
                </div>
            </div>
        </div>
    );
}