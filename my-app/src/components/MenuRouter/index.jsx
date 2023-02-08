import { Route, Routes } from "react-router";

import Articles from "../Articles";

function MenuRouter() {
    return(
        <Routes>
            <Route path="/articles" element={<Articles />} />
            {/* <Route path="/news" element={<News />} /> */}
            {/* <Route path="/favorites" element={<Favorites />}  */}
        </Routes> 
    )
}


export default MenuRouter;