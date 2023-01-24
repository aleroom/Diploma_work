import Home from "../../pages/Home";
import { Route, Routes } from 'react-router-dom'

const AppRouters = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />}></Route>
        </Routes>
    )
}

export default AppRouters;