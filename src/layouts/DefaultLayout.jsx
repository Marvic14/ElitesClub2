import { Outlet } from "react-router-dom";
import { Header } from "../components/Header/Header";
import { Footer } from "../components/Footer";

export default function DefaultLayout({ menuAtivo, setMenuAtivo }) {
    return (
        <>
            <Header menuAtivo={menuAtivo} setMenuAtivo={setMenuAtivo} />
            <div className="divisor-luxo"></div>

            <Outlet />

            <Footer />
        </>
    );
}