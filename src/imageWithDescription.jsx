import React, { useState } from "react";

const ImageWithDescription = (params) => {
  const [showMore, setShowMore] = useState(false);

  const handleClick = () => {
    console.log("See More Info clicked for:", params.title);
    setShowMore(!showMore);
  };

  return (
    <div
      style={{
        alignItems: "center",
        margin: "8px",
        border: "1px solid #ccc",
        padding: "8px",
        marginTop: "16px",
        borderRadius: "8px",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <img src={params.imgUrl} alt="image" width={100} />
        <div
          style={{
            display: "flex",
            alignItems: "flex-start",
            flexDirection: "column",
            marginLeft: "24px",
          }}
        >
          <h3>{params.title}</h3>
          <p>{params.description}</p>
          <button onClick={handleClick}>
            {showMore ? "Show Less" : "See More Info"}
          </button>

          {/* Show detailed description when button is clicked */}
          {showMore && (
            <div
              style={{
                marginTop: "15px",
                padding: "15px",
                backgroundColor: "#f9f9f9",
                borderRadius: "8px",
                border: "1px solid #ddd",
                maxWidth: "500px",
                lineHeight: "1.6",
                textAlign: "left",
              }}
            >
              <p
                style={{
                  margin: 0,
                  fontSize: "14px",
                  color: "#333",
                  textAlign: "left",
                }}
              >
                {params.detailedDescription}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ImageWithDescription;
