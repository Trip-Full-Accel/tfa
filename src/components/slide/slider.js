import React, { Component } from "react";
import Slider from "react-slick";

export default class AutoPlay extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 2000,
      cssEase: "linear",
    };
    return (
      <div
        className="silder-wrap"
        style={{
          width: "1000px",
          display: "flex",
          flexWrap: "wrap",
        }}
      >
        {/* 부산 */}

        <div
          className="busan"
          style={{
            width: "45%",
          }}
        >
          <Slider {...settings}>
            <div>
              <img src="/img/busan/busan1.jpeg" />
            </div>
            <div>
              <img src="/img/busan/busan2.jpeg" />
            </div>
            <div>
              <img src="/img/busan/busan3.jpeg" />
            </div>
            <div>
              <img src="/img/busan/busan4.jpeg" />
            </div>
            <div>
              <img src="/img/busan/busan5.jpeg" />
            </div>
          </Slider>
          <br></br>
          <h2>부산</h2>
        </div>
        {/* 대전 */}

        <div
          className="daejeon"
          style={{
            width: "45%",
          }}
        >
          <Slider {...settings}>
            <div>
              <img src="/img/daejeon/daejeon1.jpeg" />
            </div>
            <div>
              <img src="/img/daejeon/daejeon2.jpeg" />
            </div>
            <div>
              <img src="/img/daejeon/daejeon3.jpeg" />
            </div>
            <div>
              <img src="/img/daejeon/daejeon4.jpeg" />
            </div>
            <div>
              <img src="/img/daejeon/daejeon5.jpeg" />
            </div>
          </Slider>
          <br></br>
          <h2>대전</h2>
        </div>
        {/* 서울 */}

        <div
          className="seoul"
          style={{
            width: "45%",
          }}
        >
          <Slider {...settings}>
            <div>
              <img src="/img/daejeon/daejeon1.jpeg" />
            </div>
            <div>
              <img src="/img/daejeon/daejeon2.jpeg" />
            </div>
            <div>
              <img src="/img/daejeon/daejeon3.jpeg" />
            </div>
            <div>
              <img src="/img/daejeon/daejeon4.jpeg" />
            </div>
            <div>
              <img src="/img/daejeon/daejeon5.jpeg" />
            </div>
          </Slider>
          <br></br>
          <h2>서울</h2>
        </div>
        {/* 대구 */}

        <div
          className="daegu"
          style={{
            width: "45%",
          }}
        >
          <Slider {...settings}>
            <div>
              <img src="/img/daejeon/daejeon1.jpeg" />
            </div>
            <div>
              <img src="/img/daejeon/daejeon2.jpeg" />
            </div>
            <div>
              <img src="/img/daejeon/daejeon3.jpeg" />
            </div>
            <div>
              <img src="/img/daejeon/daejeon4.jpeg" />
            </div>
            <div>
              <img src="/img/daejeon/daejeon5.jpeg" />
            </div>
          </Slider>
          <br></br>
          <h2>대구</h2>
        </div>
        {/* 강릉 */}
        {/* 강릉, 대구, 대전, 부산  서울- 서울 제주 전주 광주 */}
        <div
          className="강릉"
          style={{
            width: "45%",
          }}
        >
          <Slider {...settings}>
            <div>
              <img src="/img/daejeon/daejeon1.jpeg" />
            </div>
            <div>
              <img src="/img/daejeon/daejeon2.jpeg" />
            </div>
            <div>
              <img src="/img/daejeon/daejeon3.jpeg" />
            </div>
            <div>
              <img src="/img/daejeon/daejeon4.jpeg" />
            </div>
            <div>
              <img src="/img/daejeon/daejeon5.jpeg" />
            </div>
          </Slider>
          <br></br>
          <h2>강릉</h2>
        </div>

        {/* 제주 */}
        <div
          className="제주"
          style={{
            width: "45%",
          }}
        >
          <Slider {...settings}>
            <div>
              <img src="/img/daejeon/daejeon1.jpeg" />
            </div>
            <div>
              <img src="/img/daejeon/daejeon2.jpeg" />
            </div>
            <div>
              <img src="/img/daejeon/daejeon3.jpeg" />
            </div>
            <div>
              <img src="/img/daejeon/daejeon4.jpeg" />
            </div>
            <div>
              <img src="/img/daejeon/daejeon5.jpeg" />
            </div>
          </Slider>
          <br></br>
          <h2>제주</h2>
        </div>

        {/* 전주 */}
        <div
          className="전주"
          style={{
            width: "45%",
          }}
        >
          <Slider {...settings}>
            <div>
              <img src="/img/daejeon/daejeon1.jpeg" />
            </div>
            <div>
              <img src="/img/daejeon/daejeon2.jpeg" />
            </div>
            <div>
              <img src="/img/daejeon/daejeon3.jpeg" />
            </div>
            <div>
              <img src="/img/daejeon/daejeon4.jpeg" />
            </div>
            <div>
              <img src="/img/daejeon/daejeon5.jpeg" />
            </div>
          </Slider>
          <br></br>
          <h2>전주</h2>
        </div>
        {/* 광주 */}
        <div
          className="광주"
          style={{
            width: "45%",
          }}
        >
          <Slider {...settings}>
            <div>
              <img src="/img/daejeon/daejeon1.jpeg" />
            </div>
            <div>
              <img src="/img/daejeon/daejeon2.jpeg" />
            </div>
            <div>
              <img src="/img/daejeon/daejeon3.jpeg" />
            </div>
            <div>
              <img src="/img/daejeon/daejeon4.jpeg" />
            </div>
            <div>
              <img src="/img/daejeon/daejeon5.jpeg" />
            </div>
          </Slider>
          <br></br>
          <h2>광주</h2>
        </div>
      </div>
    );
  }
}
