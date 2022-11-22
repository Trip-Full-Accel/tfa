import React, { useEffect, useState } from "react";

function Topbtn() {
  const [showButton, setShowButton] = useState(false);

  const scrollToTop = () => {
    window.scroll({
      top: 0,
      behaivor: "smooth",
    });
  };
  useEffect(() => {
    const handleShowButton = () => {
      if (window.scrollY > 150) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleShowButton);
    return () => {
      window.removeEventListener("scroll", handleShowButton);
    };
  }, []);

  return (
    showButton && (
      <div
        className="scroll__container"
        style={{ top: "77%", position: "fixed", left: "90%" }}
      >
        <button
          id="top"
          onClick={scrollToTop}
          type="button"
          style={{ border: "none" }}
        >
          {" "}
          <img
            src="/img/pointer6.png"
            style={{
              width: "50px",
              backgroundColor: "#fafafa",
              border: "none",
            }}
          ></img>
        </button>
      </div>
    )
  );
}
export default Topbtn;
