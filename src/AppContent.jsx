import { Routes, Route, useLocation } from "react-router-dom";
import { useState } from "react";

import "./App.scss";

import { Home } from "./pages/Home";
import { AcompanhantesPage } from "./pages/AcompanhantesPage";
import Login from "./pages/Login/Login";
import DefaultLayout from "./layouts/DefaultLayout";
import AuthLayout from "./layouts/AuthLayout";
import { AgeVerification } from "./components/AgeVerification/AgeVerification";
import ScrollToTop from "./ScrollToTop";
import Register from "./pages/Register/Register";

export default function AppContent() {
    const location = useLocation();
    const isAuthPage = location.pathname === "/login" || location.pathname === "/cadastro";
    const [menuAtivo, setMenuAtivo] = useState(false);

    return (
        <>
            <div className={`web-aplication ${isAuthPage ? "auth-mode" : ""}`}>
                <ScrollToTop />
                <AgeVerification />
                {/* O site-bg só aparece se não for página de autenticação */}
                {!isAuthPage && <div className="site-bg" />}

                <Routes>
                    {/* PÁGINAS COM HEADER + FOOTER */}
                    <Route element={<DefaultLayout menuAtivo={menuAtivo} setMenuAtivo={setMenuAtivo} />}>
                        <Route path="/" element={<Home />} />
                        <Route path="/acompanhantes" element={<AcompanhantesPage />} />
                    </Route>

                    {/* PÁGINAS SEM HEADER + FOOTER */}
                    <Route element={<AuthLayout />}>
                        <Route path="/login" element={<Login />} />
                        <Route path="/cadastro" element={<Register />} />
                    </Route>
                </Routes>
            </div>
        </>
    );
}