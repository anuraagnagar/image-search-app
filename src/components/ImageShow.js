import React from "react";

function ImageShow({ image }) {
  const imageUrl = image.links?.download;
  const imageSrc = image.urls.small ? image.urls.small : "#";
  const imageTitle = image.description ? image.description : "Image";
  const target = "__blank";

  return (
    <>
      <a href={imageUrl} target={target} title={imageTitle}>
        <div className="image">
          <img id={image.id} src={imageSrc} alt="Images" />
        </div>
      </a>
    </>
  );
}

export default ImageShow;
