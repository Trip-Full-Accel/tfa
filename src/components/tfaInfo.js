const TfaInfo = () => {
  return (
    <div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <div
        style={{
          border: "1px solid black",
          width: "486px",
          margin: "41px auto 20px  auto ",
          borderRadius: "14px",
          height: "642px",
        }}
      >
        <div
          className="경기장 위쪽"
          style={{
            position: "relative",
            // padding: "29px 5px 0",
            boxSizing: "border-box",
            height: "321px",
            backgroundColor: "#247847",
            borderTopLeftRadius: "14px",
            borderTopRightRadius: "14px",
            borderBottom: "1px solid yellow",
          }}
        >
          <div
            className="왕박스"
            style={{
              display: "block",
              backgroundColor: "#247847",
              border: "2px solid yellow",
              borderTop: "0 solid #338657",
              boxSizing: "border-box",
              textAlign: "center",
              width: "221px",
              height: "79px",
              //   zIndex: "-1",
            }}
          >
            <div
              className="스몰박스"
              style={{
                display: "block",
                backgroundColor: "#247847",
                border: "2px solid yellow",
                borderTop: "0 solid #338657",
                boxSizing: "border-box",
                textAlign: "center",
                width: "125px",
                height: "32px",
                // zIndex: 0,
              }}
            ></div>
            <div
              className="골대쪽 원"
              style={{
                width: "70px",
                height: "70px",
                borderRadius: "50%",
                backgroundColor: "#247847",
                borderBottom: "2px solid yellow",
                // borderTop: "2px solid #247847",
                zIndex: "-1",
              }}
            >
              <div style={{ width: "100%", height: "55px" }}>골킵</div>
            </div>
          </div>
          <div style={{ width: "476px", height: "55px" }}>3선</div>
          <div style={{ width: "476px", height: "55px" }}>2선</div>
          <div style={{ width: "476px", height: "74px" }}>공격</div>
          <div style={{ width: "476px", height: "138px" }}>
            {" "}
            <div
              className="센터 원"
              style={{
                width: "102px",
                height: "102px",
                borderRadius: "50%",
                backgroundColor: "#247847",
                border: "2px solid yellow",
              }}
            ></div>
          </div>
        </div>
        <div
          className="경기장 아래"
          style={{
            position: "relative",
            // padding: "29px 5px 0",
            boxSizing: "border-box",
            height: "321px",
            backgroundColor: "#247847",
            borderTop: "1px solid yellow",
            zIndex: "-1",
            borderBottomLeftRadius: "14px",
            borderBottomRightRadius: "14px",
          }}
        >
          {/* <div style={{ width: "476px", height: "53.25px" }}>공격</div> */}
          <div style={{ width: "476px", height: "58px" }}>2선</div>
          <div style={{ width: "476px", height: "57px" }}>3선</div>
          <div style={{ width: "476px", height: "56px" }}>수비</div>
          {/* <div style={{ width: "476px", height: "9px" }}></div> */}
          <div style={{ width: "100%", height: "55px" }}>골킵</div>
          <div
            className="골대쪽 원"
            style={{
              width: "100px",
              height: "100px",
              borderRadius: "50%",
              backgroundColor: "#247847",
              border: "2px solid yellow",
              // borderTop: "2px solid #247847",
              zIndex: "1",
              display: "inline-flex",
              flexWrap: "wrap",
              //   alignContent: "stretch",
              justifyContent: "space-evenly",
            }}
          >
            <br />

            <div
              className="왕박스"
              style={{
                display: "block",
                backgroundColor: "#247847",
                border: "2px solid yellow",
                borderBottom: "0 solid #338657",
                boxSizing: "border-box",
                textAlign: "center",
                width: "221px",
                height: "79px",
                position: "relative",
                display: "inline-flex",
                flexWrap: "wrap",
                alignContent: "stretch",
                justifyContent: "space-evenly",
                //   zIndex: "-1",
              }}
            >
              <div
                className="스몰박스"
                style={{
                  display: "block",
                  backgroundColor: "#247847",
                  border: "2px solid yellow",
                  borderTop: "2px solid yellow",
                  boxSizing: "border-box",
                  textAlign: "center",
                  width: "125px",
                  height: "32px",
                  bottom: 0,
                  position: "absolute",
                  // zIndex: 0,
                }}
              ></div>
            </div>
            {/* <div style={{ width: "100%", height: "55px" }}>골킵</div> */}
          </div>
        </div>
      </div>
    </div>
  );
};
export default TfaInfo;
