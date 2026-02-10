import "./Login.scss";
import { Link } from "react-router-dom";
import React from "react";

export default function Login() {
    return (
        <section className="login-page">
        <div className="login-wrapper">

            <div className="login-panel">
                <div className="login-content">

                    <div className="logo">
                        <img src={"/img/cereja.png"} alt="Cereja" />
                        <span>Elites Club</span>
                    </div>

                    <h1>Área exclusiva para membros e modelos</h1>
                    <p className="subtitle">Bem-vindo ao ambiente exclusivo.</p>

                    <form>
                        <label>Email</label>
                        <input type="email" placeholder="E-mail "/>
                        <label>Senha</label>
                        <input type="password" placeholder="Senha"/>

                        <div className="options">
                            <label className="remember">
                                <input type="checkbox"/>
                                Lembrar-me
                            </label>

                            <a href="#">Esqueceu sua senha?</a>
                        </div>

                        <button type="submit">
                            Entrar no ambiente exclusivo
                        </button>
                    </form>

                    <div className="request-access">
                        <span />
                        <Link to="/cadastro">Criar cadastro</Link>
                        <span />
                    </div>

                </div>
            </div>

            <div className="image-panel" />
        </div>
        </section>
    );
}