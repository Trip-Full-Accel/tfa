import { useState, useEffect } from "react";
import { Map, MapMarker, Polyline } from "react-kakao-maps-sdk";
// import { coordinate } from "";
// import Main from "./main";
// import { coordinate } from "./main.js";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { Button } from "reactstrap";
import "../static/Maps.css";
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

  // console.log(location.state?.y ? true : false);
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
  }, [location.state]);
  const [isVisible, setIsVisible] = useState(true);
  const [addr, setAddr] = useState([{ name: "서울 특별시청" }]);

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

  return (
    <div className="App">
      <h1>plan your trip</h1>
      <Map
        center={{
          lat: markers[0].position.lat,
          lng: markers[0].position.lng,
        }}
        style={{ width: "50%", height: "40rem" }}
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
          console.log(
            markers.map((el) => el.position),
            markers[0]
          );
        }}
      >
        {isVisible &&
          markers.map((marker, index) => (
            <MapMarker
              key={`${marker.position}-${index}`}
              // draggable={true}
              position={marker.position} // 마커를 표시할 위치
            >
              {/* <div
                style={{
                  color: "black",

                  textAlign: "center",
                }}
              >*/}
              <div>
                {index === 0
                  ? "이곳에서 여행 시작!"
                  : index + 1 + "번째 경유지"}
                <img src="/img/123.png"></img>
                {/* </div>  */}
              </div>
            </MapMarker>
          ))}

        <Polyline
          path={[markers.map((data) => data.position)]}
          strokeWeight={3} // 두께
          strokeColor={"#336666"} // 색
          strokeOpacity={1} // 불투명도
          strokeStyle={"shortdashdotdot"} // 스타일
        />
      </Map>
      {/* 사이드바 추가 실험 */}
      <div className="App" id="mapPage">
        <div id="left">
          {addr.map((el) => {
            return <div>{el.name}</div>;
          })}
        </div>
        <div id="right">
          <Map
            center={{ lat: 37.5666805, lng: 126.9784147 }}
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
      </div>
    </div>
  );
};

export default Maps;
