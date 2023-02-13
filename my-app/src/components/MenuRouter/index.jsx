import { Route, Routes } from "react-router";

import Articles from "../Articles";
import News from "../News";
import Favorites from "../../pages/Favorites";

function MenuRouter() {
    return(
        <Routes>
            <Route path="/articles" element={<Articles />} />
            <Route path="/news" element={<News />} /> 
            <Route path="/favorites" element={<Favorites />} />
    </Routes> 
    )
}


export default MenuRouter;