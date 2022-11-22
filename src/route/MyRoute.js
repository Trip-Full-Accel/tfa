import { BrowserRouter, Route, Routes } from "react-router-dom";
import Maps from "../components/Maps";

const MyRoute = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="maps" element={<Maps></Maps>}></Route>
            </Routes>
        </BrowserRouter>
    );
};

export default MyRoute;