import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "reactstrap";
import swal from "sweetalert";
import "../static/login.css";
import "../static/main.css";
import "../static/mainGoToMap.css";
import AutoPlay from "./slide/Slider";

const tripMessage = () => {
  swal("여행갈래요?");
};

const Main = () => {
  const navigate = useNavigate();
  const [coordinate, setCoordinate] = useState({ x: "", y: "" });
  const data = [
    { name: "Busan", x: "35.1795543", y: "129.0756416" },
    { name: "Daejeon", x: "36.3504119", y: "127.3845475" },
    { name: "Seoul", x: "37.5666805", y: "126.9784147" },
    { name: "Daegu", x: "35.8714354", y: "128.601445" },
    { name: "Gangneung", x: "37.751853", y: "128.8760574" },
    { name: "jeju", x: "33.4996213", y: "126.5311884" },
    { name: "Jeonju", x: "35.8242238", y: "127.1479532" },
    { name: "gwangju", x: "35.1595454", y: "126.8526012" },
  ];

  data.filter((el) => {
    if (el.name === "Daejeon") {
      // console.log(el.x);
    } else if (el.name === "Busan") {
      // console.log(el.x);
    }
  });
  const tripStart = (path, x, y) => {
    navigate(path, { state: { x: x, y: y } });
  };

  const coor = (e) => {
    setCoordinate(e);
    // console.log(coordinate);
  };

  return (
    <div style={{ backgroundColor: "#fafafa" }}>
      <div className="main">
        <div className="left-div" style={{ alignItems: "right" }}>
          <h1 style={{ fontFamily: "Caveat" }}>TFA</h1>
          <br />
          <h3 style={{ fontFamily: "Caveat" }}>
            Trip Full Accel에서 여행을 시작하세요
          </h3>
          <br />
          <button
            className="main-start-btn"
            onClick={() => {
              tripStart("/maps");
            }}
          >
            <span>Start</span>
          </button>
          <br />
        </div>
        {/* video */}
        <div className="video-div">
          <video
            controls
            muted
            className="main-video"
            src="./video/seoul_intro.mp4"
            autoPlay="autoplay"
            loop
          ></video>
          {/* <img src="http://vision21.kr/data/photos/mig/20180517/art_5ea786450619ccd294a8fd8412b6a46e.jpg"></img> */}
        </div>{" "}
      </div>

      {/* 이미지 슬라이드 시작 */}
      <div style={{ display: "inline-flex", margin: "100px" }}>
        <div style={{ margin: "20px" }}>
          <div className="main-maps" style={{ fontFamily: "caveat" }}>
            {/* <Link
              to={{
                pathname: "/maps",
                state: {
                  class: "x",
                },
              }}
              onClick={() => {
                coor();
              }}
              style={{ textDecoration: "none" }}
            > */}

            {data.map((el) => {
              return (
                <Button
                  style={{
                    backgroundColor: "#fafafa",
                    color: "black",
                    border: "0px",
                    fontSize: "30px",
                  }}
                  onClick={() => tripStart("/maps", el.x, el.y)}
                >
                  {el.name}
                </Button>
              );
            })}
          </div>
          {/* 개별 슬라이드 */}
          <AutoPlay></AutoPlay>
          {/* <Maps></Maps> */}
        </div>
      </div>
    </div>
  );
};
export default Main;
