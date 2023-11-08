import React from "react";
import ImageShow from "./ImageShow";

function ImageList({ images }) {
  return (
    <>
      <div className="image-list-section">
        <div className="main-content">
          {images.map((item) => {
            return <ImageShow key={item.id} image={item} />;
          })}
        </div>
      </div>
    </>
  );
}

export default ImageList;
