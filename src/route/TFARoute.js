import { BrowserRouter, Route, Routes } from "react-router-dom";
import Maps from "../components/Maps";
import Template from "../components/template";
import Main from "../components/main";
import TripStart from "../components/tripStart";
import TfaInfo from "../components/tfaInfo";

const MyRoute = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Template></Template>}>
          <Route path="maps" element={<Maps></Maps>}></Route>
          <Route path="" element={<Main></Main>}></Route>
          <Route path="login" element={""}></Route>
          <Route path="/tripstart" element={<TripStart></TripStart>}></Route>
          <Route path="/tfaInfo" element={<TfaInfo></TfaInfo>}></Route>
          {/* <Route path="login" element={<Login></Login>}></Route> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default MyRoute;
