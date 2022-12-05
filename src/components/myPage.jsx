import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Tab from "react-bootstrap/Tab";
import UserInfo from "./myPage/UserInfo";
import TravelRoute from "./myPage/TravelRoute";
import TravelCost from "./myPage/TravelCost";
const MyPage = () => {
  return (
    <Tab.Container id="left-tabs-example" defaultActiveKey="first">
      <Row>
        <Col sm={3}>
          <Nav variant="pills" className="flex-column">
            <Nav.Item>
              <Nav.Link eventKey="userInfo">회원정보수정</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="travelRoute">내 여행 돌아보기</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="travelCost">여행 경비계산</Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>
        <Col sm={9}>
          <Tab.Content>
            <Tab.Pane eventKey="userInfo">
              <UserInfo></UserInfo>
            </Tab.Pane>
            <Tab.Pane eventKey="travelRoute">
              <TravelRoute></TravelRoute>
            </Tab.Pane>
            <Tab.Pane eventKey="travelCost">
              <TravelCost></TravelCost>
            </Tab.Pane>
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>
  );
};

export default MyPage;
