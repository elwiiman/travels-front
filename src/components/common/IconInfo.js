import React from "react";

const IconInfo = ({ src, alt, className, info }) => (
  <div>
    <img src={src} alt={alt} className={className}></img>

    <span>{info}</span>
  </div>
);

export default IconInfo;
