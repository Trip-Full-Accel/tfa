import { useEffect, useState } from "react";
import { Map, MapMarker, Polyline } from "react-kakao-maps-sdk";
// import { coordinate } from "";
// import Main from "./main";
// import { coordinate } from "./main.js";
import { useLocation } from "react-router-dom";
import "../static/Maps.css";
import "../static/side.css";
import { Button } from "reactstrap";
/*global kakao*/

const Maps = () => {
  const location = useLocation();

  // const x = location.state.x;
  // const y = location.state.y;

  // console.log(x, y);

  const [markers, setMarkers] = useState([
    {
      // 서울 시청 좌표
      position: {
        lat: 37.5666805,
        lng: 126.9784147,
      },
    },
  ]);

  const city = [
    { name: "부산시청", x: "35.1795543" },
    { name: "대전시청", x: "36.3504119" },
    { name: "서울시청", x: "37.5666805" },
    { name: "대구시청", x: "35.8714354" },
    { name: "강릉시청", x: "37.751853" },
    { name: "제주시청", x: "33.4996213" },
    { name: "전주시청", x: "35.8242238" },
    { name: "광주시청", x: "35.1595454" },
  ];

  const travelPoint = [
    { city: "서울시청", name: "남산타워", x: 37.551343, y: 126.9881371 },
    { city: "서울시청", name: "롯데월드", x: 37.5112348, y: 127.0980274 },
    { city: "서울시청", name: "한강", x: 37.5175177, y: 126.9588607 },
    { city: "서울시청", name: "도깨비야시장", x: 37.5308271, y: 126.9283536 },
    { city: "서울시청", name: "엔코아", x: 37.549081, y: 126.953969 },
    { city: "서울시청", name: "플레이데이터", x: 37.4681345, y: 126.8861139 },
    { city: "서울시청", name: "광화문", x: 37.571665, y: 126.976502 },
  ];

  useEffect(() => {
    if (location.state?.x && location.state?.y)
      setMarkers([
        {
          position: {
            lat: location.state.x,
            lng: location.state.y,
          },
        },
      ]);
    city.map((el) => {
      if (location.state?.x == el.x) {
        setAddr([{ name: el.name }]);
      }
    });
  }, [location.state]);

  // useEffect(() => {
  //   setMarkers([
  //     {
  //       position: {
  //         lat: travelPoint.x,
  //         lng: travelPoint.y,
  //       },
  //     },
  //   ]);
  // }, [travelPoint.name]);
  const [isVisible, setIsVisible] = useState(true);
  const [addr, setAddr] = useState([{ name: "서울시청" }]);

  const getAddr = (lat, lng) => {
    let geocoder = new kakao.maps.services.Geocoder();

    let coord = new kakao.maps.LatLng(lat, lng);
    let callback = function (result, status) {
      if (status === kakao.maps.services.Status.OK) {
        // console.log(result);
        setAddr([...addr, { name: result[0].address.address_name }]);
      }
    };
    geocoder.coord2Address(coord.getLng(), coord.getLat(), callback);

    return addr;
  };

  const addrClickHandler = (e) => {
    console.log(e.target.value);
  };
  console.log(city.find((city) => city.name === "서울시청"));

  return (
    <div className="App" id="mapPage">
      {/* <Topbtn></Topbtn> */}
      <h1>plan your trip</h1>

      <div id="left">
        {addr.map((el, i) => {
          return (
            <div key={el.name}>
              {i + 1}번째 여행지 {el.name}
            </div>
          );
        })}
      </div>
      <div id="center">
        <Map
          center={{
            lat: markers[0].position.lat,
            lng: markers[0].position.lng,
          }}
          style={{ width: "40em", height: "30rem" }}
          level={8} // 작을 수록 범위가 좁아짐
          onClick={(_target, mouseEvent) => {
            setMarkers([
              ...markers,
              {
                position: {
                  lat: mouseEvent.latLng.getLat(),
                  lng: mouseEvent.latLng.getLng(),
                },
              },
            ]);
            // console.log(markers.map((el) => el.position));
            getAddr(mouseEvent.latLng.getLat(), mouseEvent.latLng.getLng());
            console.log(addr);
          }}
        >
          {isVisible &&
            markers.map((marker, index) => (
              <MapMarker
                key={`${marker.position}-${index}`}
                // draggable={true}
                position={marker.position} // 마커를 표시할 위치
              >
                <div
                  style={{
                    color: "#000",
                    textAlign: "center",
                  }}
                >
                  {index === 0
                    ? "이곳에서 여행 시작!"
                    : index + 1 + "번째 경유지"}
                </div>
              </MapMarker>
            ))}

          <Polyline
            path={[markers.map((data) => data?.position)]}
            strokeWeight={10} // 두께
            strokeColor={"#FF3CBB"} // 색
            strokeOpacity={0.8} // 불투명도
            strokeStyle={"dashed"} // 스타일
          />
        </Map>
      </div>
      {/* <Button onClick={(e) => addrClickHandler(e)}>경로 보기</Button> */}

      {/* side test */}
      <div
        id="right"
        className="d-flex flex-column align-items-stretch flex-shrink-0 bg-white"
        style={{ width: "380px" }}
      >
        <a
          href="/"
          className="d-flex align-items-center flex-shrink-0 p-3 link-dark text-decoration-none border-bottom"
        >
          <svg className="bi pe-none me-2" width="30" height="24"></svg>
          <span className="fs-5 fw-semibold">관광지 리스트</span>
          {/* <Button onClick={()=>{}}>top</Button> */}
        </a>
        {travelPoint.map((el) => {
          // console.log(el.name, el.city, el.x, el.y);
          return (
            <div>
              <div className="list-group list-group-flush border-bottom scrollarea">
                <a
                  href="#"
                  className="list-group-item list-group-item-action active py-3 lh-sm"
                  aria-current="true"
                  onClick={() => {
                    setMarkers([
                      ...markers,
                      {
                        position: {
                          lat: el.x,
                          lng: el.y,
                        },
                      },
                    ]);
                    setAddr([{ name: el.name }]);
                  }}
                >
                  <div className="d-flex w-100 align-items-center justify-content-between">
                    <strong className="mb-1">{el.name}</strong>
                    <small>사진넣을거임</small>
                  </div>
                  <div className="col-10 mb-1 small">
                    Some placeholder content in a paragraph below the heading
                    and date.
                  </div>
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Maps;
