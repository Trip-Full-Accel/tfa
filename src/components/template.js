import { Outlet } from "react-router-dom";
import { Container } from "reactstrap";
import Footer from "./footer";
import Header from "./header";
import AutoPlay from "./slide/slider";

const Template = () => {
  return (
    <div>
      {/* 헤더 */}
      <Header></Header>
      {/* outlet 바디 */}
      <Outlet></Outlet>
      {/* <TripCard></TripCard> */}
      {/* 푸터 */}
      <Footer></Footer>
    </div>
  );
};
export default Template;
