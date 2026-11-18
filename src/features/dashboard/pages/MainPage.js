import { jsx as _jsx } from "react/jsx-runtime";
import { useNavigate } from "react-router";
import TelaPrincipal from "../views/TelaPrincipal";

const ROUTES = {
    disposal: "/disposal",
    history: "/history",
    ranking: "/ranking",
    map: "/map",
    trashbins: "/trash-bins",
    dashboard: "/dashboard",
};

export default function MainPage() {
    const navigate = useNavigate();

    const handleCardNavigation = (cardType) => {
        if (ROUTES[cardType]) navigate(ROUTES[cardType]);
    };

    return _jsx("div", {
        className: "relative size-full overflow-hidden",
        children: _jsx(TelaPrincipal, { onNavigate: handleCardNavigation }),
    });
}