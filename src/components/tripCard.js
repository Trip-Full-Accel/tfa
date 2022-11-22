import { Card, Button } from "reactstrap";

const TripCard = () => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img
        variant="top"
        src="http://vision21.kr/data/photos/mig/20180517/art_5ea786450619ccd294a8fd8412b6a46e.jpg"
      />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>경기도의 여행지를 소개합니다.</Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
};
export default TripCard;
