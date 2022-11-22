import { useNavigate } from "react-router-dom";
import swal from "sweetalert";
import "../static/login.css";
import "../static/main.css";
import AutoPlay from "./slide/slider";
import { useEffect, useState } from "react";
const tripMessage = () => {
  swal("여행갈래요?");
};

const Main = () => {
  const navigate = useNavigate();

  const tripStart = () => {
    navigate("/tripstart");
  };

  return (
    <div style={{ backgroundColor: "#fafafa" }}>
      <div className="main">
        <div className="left-div" style={{ alignItems: "right" }}>
          <h1>TFA</h1>
          <br />
          <h3>Trip Full Accel에서 여행을 시작하세요</h3>
          <br />
          <button
            className="main-start-btn"
            onClick={() => {
              tripStart();
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
            autoplay="autoplay"
            loop
          ></video>
          {/* <img src="http://vision21.kr/data/photos/mig/20180517/art_5ea786450619ccd294a8fd8412b6a46e.jpg"></img> */}
        </div>{" "}
      </div>
      {/* 이미지 슬라이드 시작 */}
      <div style={{ display: "inline-flex", margin: "100px" }}>
        <div style={{ margin: "20px" }}>
          {/* 부산 슬라이드 */}
          <AutoPlay></AutoPlay>
        </div>
      </div>
    </div>
  );
};
export default Main;
