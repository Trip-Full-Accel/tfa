import { Map, MapMarker, Polyline } from "react-kakao-maps-sdk";
import { useState } from "react";

const Maps = () => {
  const [markers, setMarkers] = useState([
    {
      // 서울 시청 좌표
      position: {
        lat: 37.5666805,
        lng: 126.9784147,
      },
    },
  ]);

  const [isVisible, setIsVisible] = useState(true);

  return (
    <div className="App">
      <h1>TitleTitle</h1>
      <Map
        center={{ lat: 37.5666805, lng: 126.9784147 }}
        style={{ width: "50%", height: "30rem" }}
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
          path={[markers.map((data) => data.position)]}
          strokeWeight={10} // 두께
          strokeColor={"#FF3CBB"} // 색
          strokeOpacity={0.8} // 불투명도
          strokeStyle={"dashed"} // 스타일
        />
      </Map>
    </div>
  );
};

export default Maps;
